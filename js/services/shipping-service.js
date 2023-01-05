export function shipment(order){
  let basicValue = order.basic;
  let shipmentValue;

  if(basicValue < 100.0){
      shipmentValue = 20.0;
  }else if(basicValue >= 100.0 && basicValue < 200.0){
      shipmentValue = 12.0;
  }else {
      shipmentValue = 0.0;
  }
  return shipmentValue;
}