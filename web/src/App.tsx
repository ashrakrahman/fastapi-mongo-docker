import React, { useEffect, useState } from "react";
import "./App.css";
import InSIteSmallCard from "./components/InSIteSmallCard/InSIteSmallCard";
import useStripePay from "./hooks/useStripePay/useStripePay";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const { handlePay } = useStripePay();

  const getInfo = async () => {
    let res = await axios.get("http://localhost:8000/products");
    console.log(res);
    setData(res?.data?.data || []);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        {data &&
          data.map((content: any, index: number) => {
            return (
              <InSIteSmallCard
                key={"cc_" + index}
                id={content.default_price}
                title={content.name}
                subTitle={content.unit_label}
                contentArray={["Test 1", "Test 2"]}
                tag={false}
                type="regular"
                activeBtnFn={() => handlePay(content.default_price)}
                isDisabled={false}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
