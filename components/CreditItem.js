import { Card } from "react-bootstrap";
import styles from "../styles/Box.module.css";
import React, { useState } from "react";
import { motion } from "framer-motion";

const CreditItem = ({ credit, index }) => {
  return (
    <div className={styles.box}>
      <Card className={styles.card} style={{ width: "20rem" }} key={index}>
        <img src={credit.img} alt={credit.title} />
        <div className={styles.cardtext}>
          <h4>{credit.title}</h4>
          <h6>{credit.artist}</h6>
          <p>{credit.credits}</p>
        </div>
      </Card>
    </div>
  );
};

export default CreditItem;
