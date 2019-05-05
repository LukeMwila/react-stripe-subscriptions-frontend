import styled from "styled-components";

/** Theme */
import { Colors } from "../Theme";

export const AppWrapper = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  margin: 20px;
  flex-direction: column;
`;

export const SubscriptionPlansWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const SubscriptionPlanCard = styled.div`
  margin: auto;
  padding: 10px;
  border-radius: 8px;
  border-top: 5px solid ${Colors.aqua};
  height: auto;
  box-shadow: 0 2px 2px 0 rgba(14, 30, 37, 0.32);
`;

export const SubscriptionPlanCardHeading = styled.h2`
  text-align: center;
  font-size: 1.65em;
  color: ${Colors.aqua};
  padding: 7px;
  text-transform: capitalize;
`;

export const SubscriptionPlanCardPrice = styled.h2`
  color: ${Colors.aqua};
  text-align: center;
  font-size: 2.95em;
`;

export const CurrencySymbol = styled.span`
  color: ${Colors.grey};
  font-size: 0.5em;
`;

export const SubscriptionPlanCardSubHeading = styled.p`
  color: ${Colors.aqua};
  font-weight: 100;
  text-align: center;
  border-bottom: 1px dotted ${Colors.lightGrey};
  padding-bottom: 10px;
`;
