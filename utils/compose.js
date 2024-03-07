const Compose =
  (...fns) =>
  (components) =>
    fns.reduceRight((previousValue, currentValue) =>
      currentValue(previousValue),
    components); 
export default Compose;
