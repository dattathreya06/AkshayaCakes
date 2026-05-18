const l = require('./node_modules/lucide-react');
const check = ['Instagram','Facebook','MessageCircle','Phone','Mail','MapPin','Heart','CakeSlice','Sparkles','Star','ShoppingBag','ArrowRight','Menu','X','Filter','Send','Clock','Quote','Leaf','Award','Users'];
check.forEach(k => console.log(k + ': ' + (k in l)));
