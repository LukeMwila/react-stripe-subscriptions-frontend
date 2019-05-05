import * as React from "react";
import { Row, Col, Button } from "reactstrap";

/** Styling */
import {
  CurrencySymbol,
  SubscriptionPlansWrapper,
  SubscriptionPlanCard,
  SubscriptionPlanCardHeading,
  SubscriptionPlanCardPrice,
  SubscriptionPlanCardSubHeading
} from "./Styles";

/** Utils */
import { PRODUCT_PLANS, Product } from "../Utils/Consts";

const SubscribeToProduct: React.FC<{}> = () => {
  /**
   * List product plans
   * @param productPlans - array of product plans created in Stripe account that a user can subscribe to
   */
  const displayProductPlans = (
    productPlans: Array<Product>
  ): React.ReactNode => {
    if (productPlans && productPlans.length) {
      return productPlans.map(product => {
        return (
          <Col xs={12} md={4} lg={4}>
            <SubscriptionPlanCard>
              <SubscriptionPlanCardHeading>
                {product.name}
              </SubscriptionPlanCardHeading>
              <SubscriptionPlanCardPrice>
                <CurrencySymbol>$</CurrencySymbol>&nbsp;{product.price}
              </SubscriptionPlanCardPrice>
              <SubscriptionPlanCardSubHeading>
                billed monthly
              </SubscriptionPlanCardSubHeading>
              <SubscriptionPlanCardSubHeading>
                {product.description}
              </SubscriptionPlanCardSubHeading>
              <SubscriptionPlanCardSubHeading style={{ borderBottom: "none" }}>
                {product.users}
              </SubscriptionPlanCardSubHeading>
              <br />
              <br />
              <Button block={true}>Select This Plan</Button>
            </SubscriptionPlanCard>
          </Col>
        );
      });
    }
    return "No existing product plans";
  };

  return (
    <SubscriptionPlansWrapper>
      <Row>{displayProductPlans(PRODUCT_PLANS)}</Row>
    </SubscriptionPlansWrapper>
  );
};

export default SubscribeToProduct;
