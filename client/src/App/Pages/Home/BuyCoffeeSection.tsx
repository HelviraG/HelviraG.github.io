import { 
  BuyCoffeeImageBox, 
  BuyCoffeeImageLink, 
  BuyCoffeeLink, 
  BuyCoffeeTitleBox, 
  BuyCoffeeTitleTypo, 
  BuyCoffeeWrapper 
} from "@/App/Styles/Pages/HomeStyle";
import { Routes } from "@resources/Enums/Routes";
import { Trans } from "react-i18next";

export const BuyCoffeeSection = () => {
  return (
    <BuyCoffeeWrapper>
      <BuyCoffeeTitleBox>
        <BuyCoffeeTitleTypo>
          <Trans
            i18nKey="app.general.buy_coffee.title"
            components={[
              <BuyCoffeeLink href="https://motivher.fr" />,
            ]}
          />
        </BuyCoffeeTitleTypo>
      </BuyCoffeeTitleBox>

      <BuyCoffeeImageBox>
        <BuyCoffeeImageLink
          href={Routes.COFFEE}
          target="_blank"
          rel="noopener noreferrer"
        ></BuyCoffeeImageLink>
      </BuyCoffeeImageBox>
    </BuyCoffeeWrapper>
  );
};
