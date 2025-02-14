const Restaurant = (props) => {
  console.log(props.restaurant.menu.price);
  return (
    <div>
      <h3>{props.restaurant.name}</h3>
      <ul>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>{props.restaurant.rating}</li>
      </ul>
      <ul>
        <p>Hours:</p>
        <li>monday {props.restaurant.hours.monday}</li>
        <li>tuesday {props.restaurant.hours.tuesday}</li>
        <li>wednesday {props.restaurant.hours.wednesday}</li>
        <li>thursday {props.restaurant.hours.thursday}</li>
        <li>saturday {props.restaurant.hours.saturday}</li>
        <li>sunday {props.restaurant.hours.sunday}</li>
      </ul>

      <ul>
        <p>Menu:</p>
        <li>
          item: {props.restaurant.menu[0].item}, price:
          {props.restaurant.menu[0].price}
        </li>
        <li>
          item: {props.restaurant.menu[1].item}, price:
          {props.restaurant.menu[1].price}
        </li>
        <li>
          item: {props.restaurant.menu[2].item}, price:
          {props.restaurant.menu[2].price}
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
