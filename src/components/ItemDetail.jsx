
export const ItemDetail = ({ car }) => {
  return (
    <>
    <div>{car.car_factory}</div>
    <div>{car.car_model}</div>
    <div>{car.car_year}</div>
    <div>{car.category}</div>
    <img src={car.img} alt={car.car_model}/>
    <button> Agregar al carrito </button>
    </>
    
  );
};
