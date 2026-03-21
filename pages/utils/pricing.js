export function calcFinalPriceTHB(basePriceTHB, markupPercent = 12) {
    const markup = basePriceTHB * (markupPercent / 100);
    return Math.round(basePriceTHB + markup);
  }
  
  export function thbToRub(thb, rate) {
    return Math.round(thb * rate);
  }
  export default function Pricing() { return <div>Pricing page</div> }