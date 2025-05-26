// let IS_PROD = true;
// const server = IS_PROD ?
//     "https://zingvcall.onrender.com" :

//     "http://localhost:8000"


// export default server;

const IS_PROD = process.env.NODE_ENV === "production";

const server = IS_PROD
  ? "https://zingvcall.onrender.com"
  : "http://localhost:8000";

export default server;


