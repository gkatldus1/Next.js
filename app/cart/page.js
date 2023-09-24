import { age, name } from "./data.js";
import Hello from "./hello.js";

export default function Cart() {
  let content = ["Tomatoes", "Pasta"];

  return (
    <div>
      <Hello></Hello>
      <h4 className="title">Cart</h4>
      <CartItem item={content[0]} />
      <CartItem item={content[1]} />
      <Banner item="롯데카드" />
      <Banner item="현대카드" />
      <Btn item="red"></Btn>
      <Btn item="blue"></Btn>
    </div>
  );
}

function Banner(props) {
  return <h5>{props.item} 결제 행사 중</h5>;
}

function Btn(props) {
  return <button style={{ background: props.item }}>버튼임</button>;
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
