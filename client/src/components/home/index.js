import React, { useState } from "react";
import Style from "./home.module.scss";
import Burger from "../menuBurger";
import CheckboxFilter from "./checkboxFilter/index";
import Card from "./card";

function Home() {
  const veiculos = [
    {
      id: "01",
      nome: "Scania G500",
      marca: "Scania",
      ano: "2019/19",
      valor: "R$ 639.666,00",
      imagem: "https://img.olx.com.br/images/84/848238421872924.jpg",
    },
    {
      id: "02",
      nome: "Scania G500 XT 8x4",
      marca: "Scania",
      ano: "2019/19",
      valor: "R$ 745.000,00",
      imagem: "https://i.ytimg.com/vi/Y-jjCy6lLWY/maxresdefault.jpg",
    },
    {
      id: "03",
      nome: "Scania G440 6x4",
      marca: "Scania",
      ano: "2020/20",
      valor: "R$ 630.000,00",
      imagem:
        "https://cdn.salaodocarro.com.br/_upload/caminhoes/2020/05/13/scania-g-440-2013-branco-2226-0.jpg",
    },
    {
      id: "04",
      nome: "Mercedes Benz actros 6x4",
      marca: "Mercedes Benz",
      ano: "2021/22",
      valor: "R$ 455.000,00",
      imagem:
        "https://production.autoforce.com/uploads/picture/image/155764386/used_model_webp_comprar-actros-2651-1794-e8d5aa50-b878-4663-b7bf-1c38e9b214f5_68937e117a.png.webp",
    },
    {
      id: "05",
      nome: "Volvo FH 540 6x4",
      marca: "Volvo",
      ano: "2022/22",
      valor: "R$ 880.000,00",
      imagem:
        "https://brasil.agrofystatic.com/media/catalog/product/cache/1/image/850x600/0dc2d03fe217f8c83829496872af24a0/c/a/caminh-o-volvo-fh-540-6x4t-glo-Tracbel-agrofy-3-20220411235514.jpeg?usewebp=true",
    },
    {
      id: "06",
      nome: "Volkswagen 19 360",
      marca: "Volkswagen",
      ano: "2021/22",
      valor: "R$ 410.000,00",
      imagem:
        "https://s3.amazonaws.com/trucadao-production-eua/system/imagens_anuncios/imagems/001/255/597/big_thumb/cdd229e38d.jpg?1657287881",
    },
    {
      id: "07",
      nome: "Mercedes Benz MB2544",
      marca: "Mercedes Benz",
      ano: "2010/10",
      valor: "R$ 210.000,00",
      imagem:
        "https://s3.amazonaws.com/trucadao-production-eua/system/imagens_anuncios/imagems/001/330/490/big_thumb/defba048a7.jpg?1674746455",
    },
    {
      id: "08",
      nome: "Volvo FM370",
      marca: "Volvo",
      ano: "2011/11",
      valor: "R$ 200.000,00",
      imagem:
        "https://s3.amazonaws.com/trucadao-production-eua/system/imagens_anuncios/imagems/001/275/830/big_thumb/9fceded373.jpg?1661607576",
    },
    {
      id: "09",
      nome: "Jeep Compass",
      marca: "Jeep",
      ano: "2022/22",
      valor: "R$ 171.990,00",
      imagem:
        "https://s2.glbimg.com/XfBVHUmM7mON3REMyRxCJUKJrv4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/u/U/MjtSfyQ4KArmZ0uGoyiA/jeep-compass-limited-td350-01.jpg",
    },
    {
      id: "10",
      nome: "BMW X6",
      marca: "BMW",
      ano: "2022/23",
      valor: "R$ 1.066.950,00",
      imagem:
        "https://bocamafrapremium.com.br/wp-content/uploads/2022/12/f6e7a001a1f44992b730ad52adb7896e_1661348440625.jpg",
    },
    {
      id: "11",
      nome: "Audi TT 2.0 Coupé",
      marca: "AUDI",
      ano: "2016/16",
      valor: "R$ 279.000,00",
      imagem:
        "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202301/20230109/audi-tt-2.0-tfsi-coupe-ambition-2p-gasolina-stronic-wmimagem10385587114.jpg?s=fill&w=552&h=414&q=60",
    },
  ];

  const [isVeiculos, setVeiculos] = useState(veiculos);
  const automoveis = [...new Set(veiculos.map((item) => item.marca))];
  
  const filtrarVeiculos = (nome) => {
    const veiculosFiltrados = veiculos.filter(
      (veiculo) => veiculo.nome === nome
      );
      console.log(veiculosFiltrados);
      setVeiculos(veiculosFiltrados);
    };

  return (
    <>
      <Burger />
      <div className={Style.container}>
        <CheckboxFilter
          style={Style}
          automoveis={automoveis}
          setVeiculos={setVeiculos}
          filtrarVeiculos={filtrarVeiculos}
        />
        <Card Style={Style} veiculos={isVeiculos} />
      </div>
    </>
  );
}
export default Home;
