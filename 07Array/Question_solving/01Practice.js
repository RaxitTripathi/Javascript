//  Map prices to include GST (18%)

let prices = [100, 200, 500, 1000];

let gst=prices.map(price => price*18/100);
console.log(gst)