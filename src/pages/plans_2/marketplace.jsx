import React, { useState } from "react";
import { Dropdown } from "../../components";
import useCountryStore from "../../store";

const Marketplace = () => {
  const [activeBtn, setActiveBtn] = useState("btn-1");
  const [location, setLocation] = useState(1);
  const selectedCountry = useCountryStore((state) => state.selectedCountry);

  const handleClick = (button) => {
    setActiveBtn(button);
  };

  function roundToDecimal(number, decimalPlaces) {
    return Number(number.toFixed(decimalPlaces));
  }

  let suppliers;
  let buyers;
  (function calculatePricing() {
    suppliers = 1;
    suppliers = activeBtn == "btn-2" ? suppliers * 12 : suppliers;
    suppliers = suppliers * location;
    suppliers = selectedCountry === "USD" ? suppliers / 3.75 : suppliers;
    suppliers = roundToDecimal(suppliers, 2);

    buyers = 1;
    buyers = activeBtn == "btn-2" ? buyers * 12 : buyers;
    buyers = buyers * location;
    buyers = selectedCountry === "USD" ? buyers / 3.75 : buyers;
    buyers = roundToDecimal(buyers, 2);
  })();

  return (
    <>
      <div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#52006A",
              fontWeight: "700",
              fontSize: "3rem",
              marginTop: "1rem",
            }}
          >
            Inventory Management
          </h2>
          <p
            style={{
              color: "#242424",
              fontWeight: "400",
              fontSize: "1.5rem",
              marginTop: "1rem",
            }}
          >
            Streamline your inventory processes and take control of your
            business with our flexible pricing plans. Choose the plan that suits
            your needs and unlock a world of efficiency.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "2rem",
            marginTop: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <p
              style={{
                color: "#183F30",
                fontWeight: "400",
                fontSize: "1.5rem",
              }}
            >
              Number of locations
            </p>
            <input
              type="number"
              name=""
              id=""
              min="1"
              onChange={(e) => setLocation(e.target.value)}
              style={{
                border: "1px solid #B3B3B3",
                maxWidth: "10rem",
                height: "4rem",
              }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <div>
              <Dropdown />
            </div>
            <div
              style={{
                border: "1px solid #B3B3B3",
                borderRadius: "2rem",
              }}
            >
              <button
                onClick={() => handleClick("btn-1")}
                style={{
                  width: "10rem",
                  height: "4rem",
                  border: "0",
                  borderRadius: "2rem",
                  backgroundColor:
                    activeBtn == "btn-1" ? "#52006A" : "transparent",
                  color: activeBtn == "btn-1" ? "#ffffff" : "#000000",
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => handleClick("btn-2")}
                style={{
                  width: "10rem",
                  height: "4rem",
                  border: "0",
                  borderRadius: "2rem",
                  backgroundColor:
                    activeBtn == "btn-2" ? "#52006A" : "transparent",
                  color: activeBtn == "btn-2" ? "#ffffff" : "#000000",
                }}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "5rem",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "49%",
              height: "fit-content",
              backgroundColor: "#F8F8F8",
              borderRadius: "2rem",
              flexWrap: "wrap",
              gap: "2rem",
              padding: "3.5rem 2rem 3.5rem 2rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.75rem",
                color: "#52006A",
              }}
            >
              Suppliers
            </h2>
            <div>
              <h2
                style={{
                  fontSize: "1.75rem",
                  color: "#FF7600",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  gap: ".75rem",
                }}
              >
                {suppliers}
                {selectedCountry === "USD" ? <p>USD</p> : <p>SAR</p>}
              </h2>
              <p style={{ textAlign: "center", fontSize: "1.25rem" }}>
                Per Transaction
              </p>
            </div>
            <button
              style={{
                backgroundColor: "rgba(255, 118, 0, .1)",
                border: "0",
                borderRadius: "1rem",
                width: "10rem",
                height: "4rem",
                color: "#FF7600",
                fontWeight: "700",
              }}
            >
              Choose
            </button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "49%",
              height: "fit-content",
              backgroundColor: "#52006A",
              borderRadius: "2rem",
              flexWrap: "wrap",
              gap: "2rem",
              padding: "3.5rem 2rem 3.5rem 2rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.75rem",
                color: "white",
              }}
            >
              Buyers
            </h2>
            <div>
              <h2
                style={{
                  fontSize: "1.75rem",
                  color: "#FF7600",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  gap: ".75rem",
                }}
              >
                {buyers}
                {selectedCountry === "USD" ? <p>USD</p> : <p>SAR</p>}
              </h2>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.25rem",
                  color: "white",
                }}
              >
                Per Transaction
              </p>
            </div>
            <button
              style={{
                backgroundColor: "white",
                border: "0",
                borderRadius: "1rem",
                width: "10rem",
                height: "4rem",
                color: "#52006A",
                fontWeight: "700",
              }}
            >
              Choose
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketplace;