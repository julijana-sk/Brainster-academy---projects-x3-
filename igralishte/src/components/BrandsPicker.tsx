import React from 'react'
import { useRouter } from 'next/router';


const BrandItem: React.FC = () => {

const router = useRouter()

  return (
   <div className="container-fluid">
      <div className="row d-flex flex-column">
        <div className="col-12">
            <button className="bg-primary"
                    onClick={() => {
                          router.push({
                          pathname: "/brands",
                          query: { brand: "pinkPartywear" },
                          });
                          }}
                          >
              <div className="text-center">
                <span className="text-danger">Pinc Partywear</span>
              </div>
            </button>
        </div>

        <div className="col-12">
            <button className="bg-primary"
                    onClick={() => {
                          router.push({
                          pathname: "/brands",
                          query: { brand: "factoryGirl" },
                          });
                          }}
                          >
              <div className="text-center">
                <span className="text-danger">Factory Girl</span>
              </div>
            </button>
        </div>
        <div className="col-12">
            <button className="bg-primary"
                    onClick={() => {
                          router.push({
                          pathname: "/brands",
                          query: { brand: "mainDays" },
                          });
                          }}
                          >
              <div className="text-center">
                <span className="text-danger">Main Days</span>
              </div>
            </button>
        </div>
        <div className="col-12">
            <button className="bg-primary"
                    onClick={() => {
                          router.push({
                          pathname: "/brands",
                          query: { brand: "nezno" },
                          });
                          }}
                          >
              <div className="text-center">
                <span className="text-danger">Нежно</span>
              </div>
            </button>
        </div>
        <div className="col-12">
            <button className="bg-primary"
                    onClick={() => {
                          router.push({
                          pathname: "/brands",
                          query: { brand: "red" },
                          });
                          }}
                          >
              <div className="text-center">
                <span className="text-danger">Ред</span>
              </div>
            </button>
        </div>
        <div className="col-12">
            <button className="bg-primary"
                    onClick={() => {
                          router.push({
                          pathname: "/brands",
                          query: { brand: "nas" },
                          });
                          }}
                          >
              <div className="text-center">
                <span className="text-danger">Наш</span>
              </div>
            </button>
        </div>
        <div className="col-12">
            <button className="bg-primary"
                    onClick={() => {
                          router.push({
                          pathname: "/brands",
                          query: { brand: "zsDaNe" },
                          });
                          }}
                          >
              <div className="text-center">
                <span className="text-danger">Зш да не</span>
              </div>
            </button>
        </div>
        <div className="col-12">
            <button className="bg-primary"
                    onClick={() => {
                          router.push({
                          pathname: "/brands",
                          query: { brand: "fraeil" },
                          });
                          }}
                          >
              <div className="text-center">
                <span className="text-danger">Fraeil</span>
              </div>
            </button>
        </div>
        <div className="col-12">
            <button className="bg-primary"
                    onClick={() => {
                          router.push({
                          pathname: "/brands",
                          query: { brand: "urma" },
                          });
                          }}
                          >
              <div className="text-center">
                <span className="text-danger">Urma</span>
              </div>
            </button>
        </div>
        <div className="col-12">
            <button className="bg-primary"
                    onClick={() => {
                          router.push({
                          pathname: "/brands",
                          query: { brand: "candleNest" },
                          });
                          }}
                          >
              <div className="text-center">
                <span className="text-danger">Candle Nest</span>
              </div>
            </button>
        </div>
        <div className="col-12">
            <button className="bg-primary"
                    onClick={() => {
                          router.push({
                          pathname: "/brands",
                          query: { brand: "beyondGreen" },
                          });
                          }}
                          >
              <div className="text-center">
                <span className="text-danger">Beyond Green</span>
              </div>
            </button>
        </div>
        <div className="col-12">
            <button className="bg-primary"
                    onClick={() => {
                          router.push({
                          pathname: "/brands",
                          query: { brand: "gatta" },
                          });
                          }}
                          >
              <div className="text-center">
                <span className="text-danger">Gatta</span>
              </div>
            </button>
        </div>
      </div>
    </div>  
  )
}

export default BrandItem