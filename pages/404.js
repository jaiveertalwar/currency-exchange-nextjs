import Typed from "react-typed"
import Link from "next/link"

export default function Custom404() {
  return (
    <div className="container text-center h-screen flex justify-center items-center flex-col">
      <img
        className="img"
        src="https://img.icons8.com/dusk/64/000000/broken-link.png"
      />
      <h1 className="mt-5 mb-3">Something's not right...</h1>
      <br />
      <h4 className="mb-3">
        <Typed
          strings={["This page does not exist on this website"]}
          typeSpeed={30}
          startDelay={1000}
          cursorChar={""}
        />
      </h4>
      <Link href="/">
        <a className="text-teal-500 font-bold text-xl">Go back Home</a>
      </Link>

      <br />

      <style jsx>
        {`
          .img {
            width: 100px;
          }
          .margin {
            margin-top: 100px;
          }
        `}
      </style>
    </div>
  )
}
