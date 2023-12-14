/* eslint-disable no-useless-escape */
import React, { useEffect, useState } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ContactFormBox, FormIdentityWrapper, FormWrapper, SubmitButtonBox } from '../../Styles/Pages/ContactStyle';
import { MessageSnackbar } from './Snackbar/MessageSnackbar';
import { Types } from '../../Resources/Enums/Types';
import ForwardToInboxRoundedIcon from '@mui/icons-material/ForwardToInboxRounded';

interface IFormContact {
    firstName: string;
    lastName: string;
    email: string;
    email2: string;
    subject: string;
    message: string;
}

const isValidEmail = (email: string) => {
    return (
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        )
    );
}

export const ContactForm = () => {
    const { t } = useTranslation();
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const serviceId = process.env.REACT_APP_EMAIL_SERVICE;
    const publicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;
    const templateId = process.env.REACT_APP_EMAIL_TO_SEND_TEMPLATE;

    const { control, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            email2: '',
            subject: '',
            message: ''
        }
    });

    
    const handleEmailValidation = (email: string) => {
        const isValid = isValidEmail(email);
        return isValid;
    };

    const handleEmailError = () => {
        if (errors.email?.type === "validate") {
            return t('app.contact.form.error.validate');
        } else if (errors.email?.type === "required") {
            return t('app.contact.form.error.required');
        }
    }
    
    const onSubmit: SubmitHandler<IFormContact> = data => {
        if (serviceId && publicKey && templateId) {
            const templateParams = {
                "email": data.email,
                "from_name": `${data.firstName} ${data.lastName}`,
                "message": data.message,
                "subject": data.subject,
                "to_name": 'Helvira',
            }

            if (data.email2 === '') {
                emailjs.send(serviceId, templateId, templateParams, publicKey)
                    .then((result: EmailJSResponseStatus) => {
                        setSuccessMessage(true);
                    }, (error) => {
                        setErrorMessage(true);
                });
            }
        }
    };

    useEffect(() => {
        if (isSubmitSuccessful && successMessage) {
            reset({ 
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                message: '' 
            })
        }
    });

    return (
        <ContactFormBox>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormWrapper>
                    <FormIdentityWrapper>
                        <Controller
                            name="firstName"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field }) => 
                                <TextField 
                                    label={t('app.contact.form.surname.label')} 
                                    variant="standard" 
                                    sx={{ flex: 1 }} 
                                    error={Boolean(errors.firstName)}
                                    helperText={errors.firstName ? t('app.contact.form.error.required') : ""}
                                    {...field}
                                />
                            }
                        />
                        
                        <Controller
                            name="lastName"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field }) => 
                                <TextField 
                                    label={t('app.contact.form.name.label')} 
                                    variant="standard" 
                                    sx={{ flex: 1 }} 
                                    error={Boolean(errors.lastName)}
                                    helperText={errors.lastName ? t('app.contact.form.error.required') : ""}
                                    {...field} 
                                />
                            }
                        />
                    </FormIdentityWrapper>

                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: true,
                            validate: handleEmailValidation
                        }}
                        render={({ field }) => 
                            <TextField 
                                label={t('app.contact.form.email.label')} 
                                variant="standard" 
                                error={Boolean(errors.email)}
                                helperText={errors.email ? handleEmailError() : ""}
                                {...field} 
                            />
                        }
                    />

                    <Controller
                        name="email2"
                        control={control}
                        render={({ field }) => 
                            <input type='hidden' {...field} />
                        }
                    />

                    <Controller
                        name="subject"
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field }) => 
                            <TextField 
                                label={t('app.contact.form.subject.label')} 
                                variant="standard" 
                                error={Boolean(errors.subject)}
                                helperText={errors.subject ? t('app.contact.form.error.required') : ""}
                                {...field} 
                            />
                        }
                    />

                    <Controller
                        name="message"
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field }) => 
                            <TextField 
                                label={t('app.contact.form.message.label')} 
                                variant="standard" 
                                multiline 
                                minRows={3} 
                                maxRows={6}
                                error={Boolean(errors.message)}
                                helperText={errors.message ? t('app.contact.form.error.required') : ""}
                                {...field} 
                            />
                        }
                    />

                    <SubmitButtonBox>
                        <Button type="submit" variant="contained" startIcon={<ForwardToInboxRoundedIcon />}>
                            {t('app.general.actions.send')}
                        </Button>
                    </SubmitButtonBox>
                </FormWrapper>               
            </form>
            <MessageSnackbar open={successMessage} onClose={() => setSuccessMessage(false)} type={Types.SUCCESS} message={t('app.contact.form.success.msg')} />
            <MessageSnackbar open={errorMessage} onClose={() => setErrorMessage(false)} type={Types.ERROR} message={t('app.contact.form.error.message')} />
        </ContactFormBox>
    )
}