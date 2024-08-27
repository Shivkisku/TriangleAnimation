import React from 'react';

const TriangleAnimation = () => {
  return (
    <div className="flex justify-center items-center pt-8">
      <div id="triangle" className="h-96 w-96">
        <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 2000 2000">
          <polygon
            className="cls-1"
            points="928 781 1021 951 784.5 1371.97 1618 1371.97 1530.32 1544 509 1539 928 781"
          ></polygon>
          <polygon
            className="cls-3"
            points="1618 1371.97 784.5 1371.97 874.93 1211 1346 1211 923.1 456 1110.06 456 1618 1371.97"
          ></polygon>
          <g id="Layer_2" data-name="Layer 2">
            <polygon
              className="cls-2"
              points="418 1372.74 509 1539 928 781 1162.32 1211 1346 1211 923.1 456 418 1372.74"
            ></polygon>
          </g>
        </svg>
      </div>
      <style jsx>{`
        .cls-1 {
          fill: #f15a24;
          animation: cls1 4s ease infinite both;
        }

        @keyframes cls1 {
          0% {
            fill: #f15a24;
          }
          34% {
            fill: #ed1c24;
          }
          66% {
            fill: #f7931e;
          }
          100% {
            fill: #f15a24;
          }
        }

        .cls-2 {
          fill: #f7931e;
          animation: cls2 4s ease infinite both;
        }

        @keyframes cls2 {
          0% {
            fill: #f7931e;
          }
          34% {
            fill: #f15a24;
          }
          66% {
            fill: #ed1c24;
          }
          100% {
            fill: #f7931e;
          }
        }

        .cls-3 {
          fill: #ed1c24;
          animation: cls3 4s ease infinite both;
        }

        @keyframes cls3 {
          0% {
            fill: #ed1c24;
          }
          34% {
            fill: #f7931e;
          }
          66% {
            fill: #f15a24;
          }
          100% {
            fill: #ed1c24;
          }
        }

        #triangle {
          animation: triangle 4s both infinite;
        }

        @keyframes triangle {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
};

export default TriangleAnimation;
