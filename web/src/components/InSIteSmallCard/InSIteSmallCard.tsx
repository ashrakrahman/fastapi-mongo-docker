import { Button, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import "./InSIteSmallCard.scss";
import DoneIcon from "@mui/icons-material/Done";

interface InSIteSmallCardProps {
  id: string;
  title: string;
  subTitle: string;
  contentArray?: any;
  contentDiv?: any;
  activeBtnFn?: any;
  // contactBtnFn: any;
  tag?: boolean;
  type: string;
  isDisabled?: boolean;
}

const InSIteSmallCard: FunctionComponent<InSIteSmallCardProps> = ({
  id,
  title,
  subTitle,
  contentArray,
  contentDiv,
  activeBtnFn = null,
  // contactBtnFn,
  isDisabled = false,
  tag,
  type,
}) => {
  return (
    <div className="insite_small_card__wrapper">
      <div className="insite_small_card">
        <div className="insite_small_card_content">
          {tag === true && (
            <div className="tag">
              <div className="tag_text">Most Popular!</div>
            </div>
          )}
          <Typography>{title}</Typography>
          <Typography style={{ marginTop: "10px", marginBottom: "15px" }}>
            {subTitle}
          </Typography>
          {type === "regular" && (
            <div style={{ marginBottom: "15px" }}>
              {contentArray &&
                contentArray.map((content: string, index: number) => {
                  return (
                    <div
                      key={title + "_" + index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon
                        fontSize="small"
                        style={{
                          color: "green",
                          marginRight: "10px",
                        }}
                      />
                      <Typography>{content}</Typography>
                    </div>
                  );
                })}
            </div>
          )}
          {type === "content" && contentDiv}
        </div>
        <div className="insite_small_card_button">
          <Button variant="contained" onClick={activeBtnFn}>
            Pay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InSIteSmallCard;
