import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { CardActions, IconButton, Link, Typography } from "@mui/material";
import { Routes } from "@resources/Enums/Routes";
import {
  CardBox,
  CardBoxWrapper,
  CardContentBox,
  CardContentTypography,
  CardWrapper,
  DrawerAvatar,
  DrawerAvatarWrapper,
  DrawerChip,
  DrawerChipWrapper,
  DrawerClose,
  DrawerCloseWrapper,
  DrawerWrapper,
  SocialMediaWrapper,
} from "@styles/Components/AvatarDrawerStyle";
import { useRef } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import useClickOutside from "../../../Hooks/useClickOutside";

interface AvatarDrawerProps {
  expandAvatar: boolean;
  handleCloseAvatar: () => void;
}

export const AvatarDrawer = ({
  expandAvatar,
  handleCloseAvatar,
}: AvatarDrawerProps) => {
  const { t } = useTranslation();
  const drawerRef = useRef(null);

  useClickOutside(drawerRef, handleCloseAvatar);

  return (
    <DrawerWrapper open={expandAvatar} PaperProps={{ ref: drawerRef }}>
      <DrawerCloseWrapper>
        <DrawerClose disableRipple onClick={handleCloseAvatar}>
          <CloseRoundedIcon />
        </DrawerClose>
      </DrawerCloseWrapper>
      <DrawerAvatarWrapper>
        <DrawerAvatar
          alt="Helvira Goma - Computer Whisperer - Tech Speaker - Web Enthusiast"
          src="https://i.ibb.co/0Bhnz0g/1715867189847-1.jpg"
        />
      </DrawerAvatarWrapper>
      <DrawerChipWrapper>
        <DrawerChip label="Helvira Goma" />
      </DrawerChipWrapper>
      <SocialMediaWrapper>
        <IconButton component={RouterLink} to={Routes.LINKEDIN}>
          <LinkedInIcon />
        </IconButton>
        <IconButton component={RouterLink} to={Routes.GITHUB}>
          <GitHubIcon />
        </IconButton>
        <IconButton component={RouterLink} to={Routes.TWITTER}>
          <TwitterIcon />
        </IconButton>
      </SocialMediaWrapper>
      <CardBox>
        <CardBoxWrapper>
          <CardWrapper>
            <CardContentBox>
              <CardContentTypography variant="h5">
                {t("app.menu.profile.about")}
              </CardContentTypography>
              <Typography
                sx={(theme) => ({
                  color: "#FB0F5A",
                  cursor: "none",
                  fontWeight: 900,
                  textDecoration: "none",
                })}
              >
                <Trans
                  i18nKey="app.menu.profile.about_text"
                  components={[
                    <Link
                      href="https://motivher.fr"
                      sx={{
                        color: "lightpink!important",
                        cursor: "none",
                        fontWeight: "900!important",
                        textDecoration: "none",
                      }}
                    />,
                  ]}
                />
              </Typography>
            </CardContentBox>
            <CardActions></CardActions>
          </CardWrapper>
        </CardBoxWrapper>
      </CardBox>
    </DrawerWrapper>
  );
};
