import React from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ContactFormBox, FormIdentityWrapper, FormWrapper, SubmitButtonBox } from '../../Styles/Pages/ContactStyle';

interface IFormContact {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}

export const ContactForm = () => {
    const { t } = useTranslation();

    const serviceId = process.env.REACT_APP_EMAIL_SERVICE;
    const publicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;
    const templateId = process.env.REACT_APP_EMAIL_TO_SEND_TEMPLATE;

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        }
    });
    
    const onSubmit: SubmitHandler<IFormContact> = data => {
        if (serviceId && publicKey && templateId) {
            const templateParams = {
                "email": data.email,
                "from_name": `${data.firstName} ${data.lastName}`,
                "message": data.message,
                "subject": data.subject,
                "to_name": 'Helvira',
            }

            emailjs.send(serviceId, templateId, templateParams, publicKey)
                .then((result: EmailJSResponseStatus) => {
                    console.log(result);
                }, (error) => {
                    console.log(error);
            });
        }
    };

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
                        }}
                        render={({ field }) => 
                            <TextField 
                                label={t('app.contact.form.email.label')} 
                                variant="standard" 
                                error={Boolean(errors.email)}
                                helperText={errors.email ? t('app.contact.form.error.required') : ""}
                                {...field} 
                            />
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
                        <Button type="submit" variant="contained">{t('app.general.actions.send')}</Button>
                    </SubmitButtonBox>
                </FormWrapper>               
            </form>
        </ContactFormBox>
    )
}