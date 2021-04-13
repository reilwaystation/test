import React from "react";

const index = (props) => {
  return (
    <div>
      <h1>trycatch fetching</h1>
      <pre>{props.data && JSON.stringify(props.data, undefined, 2)}</pre>
    </div>
  );
};

export default index;

export const getServerSideProps = async (context) => {
  try {
    const res = await fetch("https://hoshiidesu.herokuapp.com/shop/products");
    const data = await res.json();
    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};
