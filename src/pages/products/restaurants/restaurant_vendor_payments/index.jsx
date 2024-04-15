import React from "react";
import { useLocation } from "react-router-dom";
import {
  Wrapper,
  HeroSecondary,
  Brands,
  RequestADemo,
  Benefits,
  AlternateCards,
} from "../../../../components";
// import { section } from "./style";

const RestaurantVendorPayments = () => {
  const images = [
    "/images/timely-and-accurate-payments.svg",
    "/images/fast-and-accurate-payment-processing.svg",
    "/images/cost-effective-payment-processing.svg",
    "/images/secure-payment-system.svg",
    "/images/payment-tracking-and-reporting.svg",
    "/images/automated-data-entry.svg",
    "/images/transparent-payment-audit-trial.svg",
    "/images/enhanced-vendor-staff-communication.svg",
    "/images/online-invoice-submission.svg",
    "/images/seamless-integration.svg",
  ];

  const captions = [
    "Timely and Accurate Payments",
    "Fast and Accurate Payment Processing",
    "Cost-Effective Payment Processing",
    "Secure Payment System",
    "Payment Tracking and Reporting",
    "Automated Data Entry",
    "Transparent Payment Audit Trail",
    "Enhanced Vendor-Staff Communication",
    "Online Invoice Submission",
    "Seamless Integration",
  ];

  const forAlternateCards = {
    wateenSoftwareSoftware: {
      caption: "will help you!",
      heading: "Wateen Multi Units and Chains Software",
      details:
        "Wateen Restaurant vendor payments software is a must-have for any restaurant. It streamlines the process of paying vendors by automating payments, reconciling accounts, and providing detailed reporting. This eliminates the need for manual processes such as tracking vendor invoices, preparing payments, managing accounts, and dealing with discrepancies. It also simplifies the process for vendors by providing them with secure, automated payment processing. With Wateen restaurant vendor payments software, restaurants can save time and money, reduce mistakes, and improve vendor relations.",
      image: "/images/wateen-multi-units-and-chain-software.svg",
    },

    clearVisibility: {
      heading: "Improved cash flow",
      details:
        "Wateen software helps restaurants to speed up the payment process, which helps to improve cash flow.",
      image: "/images/improved-cashflow.svg",
    },

    increasedEfficiency: {
      heading: "Increased accuracy",
      details:
        "By automating the payment process, restaurants can minimize errors and ensure accuracy in payments.",
      image: "/images/increased-accuracy.svg",
    },

    customizationOptions: {
      heading: "Streamlined vendor management",
      details:
        "Wateen software can help to streamline the process of managing vendors, making it easier to keep track of payments and invoices.",
      image: "/images/streamlined-vendor-management.svg",
    },
  };

  const location = [
    "Home",
    "Products",
    "Restaurants",
    "Restaurant Vendor Payments",
  ];

  return (
    <>
      <section>
        <HeroSecondary
          location={location}
          h2="Restaurant Vendor Payments"
          h3="Simplify Your Restaurant's Vendor Payments Today!"
        />
      </section>
      <section
        style={{
          margin: "5rem 0 0rem 0",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "1.5rem",
            color: "#FF7600",
          }}
        >
          Wateen Restaurant Vendor Payments Software
        </p>
        <h1
          style={{
            fontSize: "3rem",
            color: "#52006A",
          }}
        >
          Offers Some Significant Benefits
        </h1>
        <div
          style={{
            margin: "0rem 0 0rem 0",
            display: "flex",
            gap: "0rem",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              width: images.length > 5 ? "120rem" : "90rem",
              marginTop: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            <Benefits images={images} captions={captions} />
          </div>
        </div>
      </section>
      <section
        style={{
          marginTop: "5rem",
        }}
      >
        <Wrapper>
          <AlternateCards forAlternateCards={forAlternateCards} />
        </Wrapper>
      </section>
      <section>
        <Wrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "6rem",
            }}
          >
            <Brands />
          </div>
        </Wrapper>
      </section>
      <section style={{ marginBottom: "50rem" }}>
        <Wrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "6rem",
            }}
          >
            <RequestADemo />
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default RestaurantVendorPayments;
