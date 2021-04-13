import React from "react";

const index = (props) => {
  return (
    <div>
      <h1>normal fetching</h1>
      <pre>{JSON.stringify(props.data, undefined, 2)}</pre>
    </div>
  );
};

export default index;

export const getServerSideProps = async (context) => {
  const res = await fetch("https://hoshiidesu.herokuapp.com/shop/products");
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
};
