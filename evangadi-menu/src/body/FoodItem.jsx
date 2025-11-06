import  { Component } from 'react'
import styles from './FoodItem.module.css'
import menu from "../commonResource/data.js";

 class FoodItem extends Component {
  render() {
    return (
      <>
        <div className={styles["foods-container"]}>
          {menu.map(({ id, title, category, price, img, desc }) => (
            <div key={id} className={styles["single-food"]}>
              <div className={styles.img}>
                <img src={img} alt={title} />
              </div>
              <div className={styles["title-price"]}>
                <h3>{title}</h3>
                <p>{price}</p>
              </div>
              <div className={styles["food-desc"]}>{desc}</div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default FoodItem;