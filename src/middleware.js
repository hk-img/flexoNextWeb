import { NextResponse } from "next/server";
import { TOKEN_NAME } from "./constant/constant";
const urlRedirects = {
  "/in/coworking-space/Mumbai/Bandra-Kurla-Complex":
    "/in/coworking-space/mumbai/bandra-kurla-complex",
  "/in/coworking-space/Mumbai/Powai": "/in/coworking-space/mumbai/powai",
  "/in/coworking-space/Mumbai/Andheri-East":
    "/in/coworking-space/mumbai/andheri-east",
  "/in/coworking-space/Mumbai/Thane": "/in/coworking-space/mumbai/thane",
  "/in/coworking-space/Mumbai/Lower-Parel":
    "/in/coworking-space/mumbai/lower-parel",
  "/in/coworking/andheri": "/in/coworking-space/mumbai/andheri",
  "/in/coworking-space/mumbai-suburban/andheri":
    "/in/coworking-space/mumbai/andheri",
  "/in/coworking-space/mumbai-suburban/andheri-east":
    "/in/coworking-space/mumbai/andheri-east",
  "/in/coworking-space/mumbai-suburban/andheri-west":
    "/in/coworking-space/mumbai/andheri-west",
  "/in/coworking-space/mumbai-suburban/bandra":
    "/in/coworking-space/mumbai/bandra",
  "/in/coworking-space/mumbai-suburban/bandra-kurla-complex":
    "/in/coworking-space/mumbai/bandra-kurla-complex",
  "/in/coworking-space/mumbai-suburban/bandra-west":
    "/in/coworking-space/mumbai/bandra",
  "/in/coworking-space/mumbai/bandra-west": "/in/coworking-space/mumbai/bandra",
  "/in/coworking-space/mumbai-suburban/bhandup":
    "/in/coworking-space/mumbai/bhandup",
  "/in/coworking-space/mumbai-suburban/bkc": "/in/coworking-space/mumbai/bkc",
  "/in/coworking-space/mumbai-suburban/borivali":
    "/in/coworking-space/mumbai/borivali",
  "/in/coworking-space/mumbai-suburban/borivali-east":
    "/in/coworking-space/mumbai/borivali-east",
  "/in/coworking-space/mumbai-suburban/borivali-west":
    "/in/coworking-space/mumbai/borivali-west",
  "/in/coworking-space/mumbai-suburban/chembur":
    "/in/coworking-space/mumbai/chembur",
  "/in/coworking-space/mumbai-suburban/churchgate":
    "/in/coworking-space/mumbai/churchgate",
  "/in/coworking-space/mumbai-suburban/colaba":
    "/in/coworking-space/mumbai/colaba",
  "/in/coworking-space/mumbai-suburban/dadar":
    "/in/coworking-space/mumbai/dadar",
  "/in/coworking-space/mumbai-suburban/dahisar":
    "/in/coworking-space/mumbai/dahisar",
  "/in/coworking-space/mumbai-suburban/dahisar-east":
    "/in/coworking-space/mumbai/dahisar-east",
  "/in/coworking-space/mumbai-suburban/deonar":
    "/in/coworking-space/mumbai/deonar",
  "/in/coworking-space/mumbai-suburban/fort": "/in/coworking-space/mumbai/fort",
  "/in/coworking-space/mumbai-suburban/ghatkopar":
    "/in/coworking-space/mumbai/ghatkopar",
  "/in/coworking-space/mumbai-suburban/goregaon":
    "/in/coworking-space/mumbai/goregaon",
  "/in/coworking-space/mumbai-suburban/goregaon-east":
    "/in/coworking-space/mumbai/goregaon-east",
  "/in/coworking-space/mumbai-suburban/goregaon-west":
    "/in/coworking-space/mumbai/goregaon-west",
  "/in/coworking-space/mumbai-suburban/juhu": "/in/coworking-space/mumbai/juhu",
  "/in/coworking-space/mumbai-suburban/kandivali":
    "/in/coworking-space/mumbai/kandivali",
  "/in/coworking-space/mumbai-suburban/kandivali-west":
    "/in/coworking-space/mumbai/kandivali-west",
  "/in/coworking-space/mumbai-suburban/khar": "/in/coworking-space/mumbai/khar",
  "/in/coworking-space/mumbai-suburban/khar-west":
    "/in/coworking-space/mumbai/khar-west",
  "/in/coworking-space/mumbai/khar": "/in/coworking-space/mumbai/khar-west",
  "/in/coworking-space/mumbai-suburban/lower-parel":
    "/in/coworking-space/mumbai/lower-parel",
  "/in/coworking-space/mumbai-suburban/mahalaxmi":
    "/in/coworking-space/mumbai/mahalaxmi",
  "/in/coworking-space/bangalore/mahalakshmi-layout":
    "/in/coworking-space/bangalore/mahalakshmipuram-layout",
  "/in/coworking-space/mumbai-suburban/mahim":
    "/in/coworking-space/mumbai/mahim-west",
  "/in/coworking-space/mumbai/mahim": "/in/coworking-space/mumbai/mahim-west",
  "/in/coworking-space/mumbai-suburban/malad":
    "/in/coworking-space/mumbai/malad",
  "/in/coworking-space/mumbai-suburban/malad-west":
    "/in/coworking-space/mumbai/malad-west",
  "/in/coworking-space/mumbai-suburban/marine-Lines":
    "/in/coworking-space/mumbai/marine-lines",
  "/in/coworking-space/mumbai-suburban/mulund":
    "/in/coworking-space/mumbai/mulund",
  "/in/coworking-space/mumbai-suburban/nariman-Point":
    "/in/coworking-space/mumbai/mariman-point",
  "/in/coworking-space/mumbai-suburban/parel":
    "/in/coworking-space/mumbai/parel",
  "/in/coworking-space/mumbai-suburban/powai":
    "/in/coworking-space/mumbai/powai",
  "/in/coworking-space/mumbai-suburban/prabhadevi":
    "/in/coworking-space/mumbai/prabhadevi",
  "/in/coworking-space/mumbai-suburban/santacruz":
    "/in/coworking-space/mumbai/santacruz",
  "/in/coworking-space/mumbai-suburban/santacruz-east":
    "/in/coworking-space/mumbai/santacruz-east",
  "/in/coworking-space/mumbai-suburban/santacruz-west":
    "/in/coworking-space/mumbai/santacruz-west",
  "/in/coworking-space/mumbai-suburban/thane": "/in/coworking/thane",
  "/in/coworking-space/mumbai-suburban/vikhroli":
    "/in/coworking-space/mumbai/vikhroli",
  "/in/coworking-space/mumbai-suburban/vile-parle":
    "/in/coworking-space/mumbai/vile-parle",
  "/in/coworking-space/mumbai-suburban/vile-parle-west":
    "/in/coworking-space/mumbai/vile-parle-west",
  "/in/coworking-space/mumbai/vile-parle-west":
    "/in/coworking-space/mumbai/vile-parle",
  "/in/coworking-space/mumbai-suburban/worli":
    "/in/coworking-space/mumbai/worli",
  "/in/coworking-space/Navi Mumbai/CBD-Belapur":
    "/in/coworking-space/navi mumbai/cbd-belapur",
  "/in/coworking-space/mumbai/Dahisar": "/in/coworking-space/mumbai/dahisar",
  "/in/coworking-space/navi/mumbai/cbd-belapur":
    "/in/coworking-space/navi-mumbai/cbd-belapur",
  "/in/coworking-space/bangalore/malleswaram":
    "/in/coworking-space/bangalore/malleshwaram",
  "/in/coworking-space/mumbai/hitec-city":
    "/in/coworking-space/hyderabad/hitec-city",
  "/in/coworking-space/new-delhi/pushp-vihar":
    "/in/coworking-space/delhi/pushp-vihar",
  "/in/coworking-space/pune/yerwada": "/in/coworking-space/pune/yerawada",
  "/in/coworking-space/bengaluru/richmond-town":
    "/in/coworking-space/bangalore/richmond-town",
  "/in/coworking-space/bengaluru/goregaon-east":
    "/in/coworking-space/mumbai/goregaon-east",
  "/in/coworking-space/delhi/janak-puri": "/in/coworking-space/delhi/janakpuri",
  "/in/coworking-space/gurugram/sector-47":
    "/in/coworking-space/gurgaon/sector-47",
  "/in/coworking-space/new delhi/kalkaji": "/in/coworking-space/delhi/kalkaji",
  "/in/coworking-space/new-delhi/model-town":
    "/in/coworking-space/delhi/model-town",
  "/in/coworking-space/coimbatore/race-course": "/in/coworking/coimbatore",
  "/in/coworking-space/mumbai/marol": "/in/coworking-space/mumbai/andheri-east",
  "/in/coworking-space/delhi/camp": "/in/coworking-space/pune/camp",
  "/in/coworking-space/pune/madhapur": "/in/coworking-space/hyderabad/madhapur",
  "/in/coworking-space/bangalore/deccan-gymkhana":
    "/in/coworking-space/pune/deccan-gymkhana",
  "/in/spaces/coimbatore": "/in/coworking/coimbatore",
  "/in/spaces/bangalore": "/in/coworking/bangalore",
  "/in/spaces/mumbai": "/in/coworking/mumbai",
  "/in/spaces/Mumbai": "/in/coworking/mumbai",
  "/in/spaces/delhi": "/in/coworking/delhi",
  "/in/spaces/chennai": "/in/coworking/chennai",
  "/in/spaces/noida": "/in/coworking/noida",
  "/in/spaces/hyderabad": "/in/coworking/hyderabad",
  "/in/spaces/haralur": "/in/coworking/haralur",
  "/in/spaces/surat": "/in/coworking/surat",
  "/in/spaces/ahmedabad": "/in/coworking/ahmedabad",
  "/in/spaces/vadodara": "/in/coworking/vadodara",
  "/in/spaces/nashik": "/in/coworking/nashik",
  "/in/spaces/ramanathapuram": "/in/coworking/ramanathapuram",
  "/in/spaces/pune": "/in/coworking/pune",
  "/in/spaces/margao": "/in/coworking/margao",
  "/in/spaces/kolkata": "/in/coworking/kolkata",
  "/in/spaces/bengaluru": "/in/coworking/bengaluru",
  "/in/spaces/ulhasnagar": "/in/coworking/ulhasnagar",
  "/in/spaces/pimpri-chinchwad": "/in/coworking-space/pune/pimpri-chinchwad",
  "/in/spaces/new%20delhi": "/in/coworking/delhi",
  "/in/spaces/greater%20mohali": "/in/coworking-space/chandigarh/mohali",
  "/in/spaces/mumbai/lower-parel": "/in/coworking-space/mumbai/lower-parel",
  "/in/spaces/mumbai/bandra-kurla-complex":
    "/in/coworking-space/mumbai/bandra-kurla-complex",
  "/in/coworking-space/new delhi/saidullajab":
    "/in/coworking-space/delhi/saidullajab",
  "/in/coworking-space/mumbai/andheri":
    "/in/coworking-space/mumbai/andheri-east",
  "/in/coworking-space/gurugram/phase-3":
    "/in/coworking-space/gurgaon/dlf-phase-3",
  "/in/coworking-space/gurugram/sector-61":
    "/in/coworking-space/gurgaon/sector-61",
  "/in/coworking-space/delhi/vile-parle":
    "/in/coworking-space/mumbai/vile-parle",
  "/in/coworking-space/delhi/bandra-kurla-complex":
    "/in/coworking-space/mumbai/bandra-kurla-complex",
  "/in/coworking-space/gurugram/-sector 19":
    "/in/coworking-space/gurgaon/sector-19",
  "/in/coworking-space/gurugram/dlf-cyber-city":
    "/in/coworking-space/gurgaon/dlf-cyber-city",
  "/in/coworking-space/gurugram/sector-18":
    "/in/coworking-space/gurgaon/sector-18",
  "/in/coworking-space/gurugram/-sector-19":
    "/in/coworking-space/gurgaon/sector-19",
  "/in/coworking-space/gurugram/sector-81a":
    "/in/coworking-space/gurgaon/sector-81a",
  "/in/coworking-space/gurugram/sector-65":
    "/in/coworking-space/gurgaon/sector-65",
  "/in/coworking-space/bangalore/kurla": "/in/coworking-space/mumbai/kurla",
  "/in/coworking-space/gurugram/-sector 18":
    "/in/coworking-space/gurgaon/sector-18",
  "/in/coworking-space/bangalore/electronics-city":
    "/in/coworking-space/bangalore/electronic-city",
  "/in/coworking-space/gurugram/sector-38":
    "/in/coworking-space/gurgaon/sector-38",
  "/in/coworking-space/gurugram/golf-course-road":
    "/in/coworking-space/gurgaon/golf-course-road",
  "/in/coworking-space/gurugram/phase-5":
    "/in/coworking-space/gurgaon/dlf-phase-5",
  "/in/coworking-space/mumbai/andheri-chakala":
    "/in/coworking-space/mumbai/andheri-east",
  "/in/coworking-space/new delhi/vasant-kunj":
    "/in/coworking-space/delhi/vasant-kunj",
  "/in/coworking-space/delhi/erandawane": "/in/coworking-space/pune/erandwane",
  "/in/coworking-space/bangalore/lower-parel":
    "/in/coworking-space/mumbai/lower-parel",
  "/in/coworking-space/mumbai/andheri-marol":
    "/in/coworking-space/mumbai/andheri-east",
  "/in/coworking-space/bengaluru/-bannerghatta road":
    "/in/coworking-space/bangalore/bannerghatta-road",
  "/in/coworking-space/delhi/safdarjung":
    "/in/coworking-space/delhi/safdarjung-enclave",
  "/in/coworking-space/new-delhi/safdarjung-enclave":
    "/in/coworking-space/delhi/safdarjung-enclave",
  "/in/coworking-space/bengaluru/lower-parel":
    "/in/coworking-space/mumbai/lower-parel",
  "/in/coworking-space/chennai/vadalapani":
    "/in/coworking-space/chennai/vadapalani",
  "/in/coworking-space/new delhi/defence-colony":
    "/in/coworking-space/delhi/defence-colony",
  "/in/coworking-space/gurugram/erandwane":
    "/in/coworking-space/pune/erandwane",
  "/in/coworking-space/mumbai/andheri-east-midc":
    "/in/coworking-space/mumbai/andheri-east",
  "/in/spaces/mumbai/andheri-east": "/in/coworking-space/mumbai/andheri-east",
  "/in/coworking-space/new-delhi/safdarjung-development area":
    "/in/coworking-space/delhi/safdarjung-development-area",
  "/in/coworking-space/new-delhi/ajmeri-gate":
    "/in/coworking-space/delhi/ajmeri-gate",
  "/in/coworking-space/hyderabad/andheri-east":
    "/in/coworking-space/mumbai/andheri-east",
  "/in/coworking-space/hyderabad/mind-space":
    "/in/coworking-space/hyderabad/mindspace",
  "/in/coworking-space/navi/mumbai/sanpada":
    "/in/coworking-space/navi-mumbai/sanpada",
  "/in/coworking/gurugram": "/in/coworking/gurgaon",
  "/in/coworking-space/Navi Mumbai/Kharghar":
    "/in/coworking-space/navi mumbai/kharghar",
  "/in/coworking-space/navi/mumbai/Kharghar":
    "/in/coworking-space/navi-mumbai/kharghar",
  "/in/coworking-space/Navi Mumbai/Mahape":
    "/in/coworking-space/navi mumbai/mahape",
  "/in/coworking-space/navi/mumbai/mahape":
    "/in/coworking-space/navi-mumbai/mahape",
  "/in/coworking-space/Navi Mumbai/Nerul":
    "/in/coworking-space/navi mumbai/nerul",
  "/in/coworking-space/navi/mumbai/nerul":
    "/in/coworking-space/navi-mumbai/nerul",
  "/in/coworking-space/Navi Mumbai/Sanpada":
    "/in/coworking-space/navi mumbai/sanpada",
  "/in/coworking-space/Navi Mumbai/Turbhe":
    "/in/coworking-space/navi mumbai/turbhe",
  "/in/coworking-space/navi/mumbai/turbhe":
    "/in/coworking-space/navi-mumbai/turbhe",
  "/in/coworking-space/Navi Mumbai/Vashi":
    "/in/coworking-space/navi mumbai/vashi",
  "/in/coworking-space/navi/mumbai/vashi":
    "/in/coworking-space/navi-mumbai/vashi",
  "/in/coworking-space/Thane/Thane-East":
    "/in/coworking-space/thane/thane-east",
  "/in/coworking-space/Thane/Thane-West":
    "/in/coworking-space/thane/thane-west",
  "/in/coworking-space-for-rent/Mumbai": "/in/coworking/mumbai",
  "/in/coworking-space-for-rent/Navi-Mumbai": "/in/coworking/navi-mumbai",
  "/in/coworking-space-for-rent/Thane": "/in/coworking/thane",
  "/in/coworking-space/mumbai/thane": "/in/coworking/thane",
  "/in/coworking-space/bengaluru/hebbal":
    "/in/coworking-space/bangalore/hebbal",
  "/in/coworking-space/new-delhi/south-delhi":
    "/in/coworking-space/delhi/south-delhi",
  "/in/spaces/Hyderabad": "/in/coworking/hyderabad",
  "/in/spaces/Nashik": "/in/coworking/nashik",
  "/in/spaces/jaipur": "/in/coworking/jaipur",
  "/in/spaces/Nalitabari": "/in/coworking/nalitabari",
  "/in/spaces/Atmakur": "/in/coworking/atmakur",
  "/in/spaces/Kasavanahalli": "/in/coworking/kasavanahalli",
  "/in/spaces/Ghaziabad": "/in/coworking/ghaziabad",
  "/in/coworking-space/thane/navi-mumbai": "/in/coworking/navi-mumbai",
  "/in/coworking-space/thane/cbd-belapur":
    "/in/coworking-space/navi-mumbai/cbd-belapur",
  "/in/coworking-space/thane/sanpada":
    "/in/coworking-space/navi-mumbai/sanpada",
  "/in/coworking-space/thane/kharghar":
    "/in/coworking-space/navi-mumbai/kharghar",
  "/in/coworking-space/thane/mahape": "/in/coworking-space/navi-mumbai/mahape",
  "/in/coworking-space/thane/nerul": "/in/coworking-space/navi-mumbai/nerul",
  "/in/coworking-space/thane/turbhe": "/in/coworking-space/navi-mumbai/turbhe",
  "/in/coworking-space/thane/vashi": "/in/coworking-space/navi-mumbai/vashi",
  "/in/coworking-space/ranga-reddy/gachibowli":
    "/in/coworking-space/hyderabad/gachibowli",
  "/in/coworking-space/ranga-reddy/hitec-city":
    "/in/coworking-space/hyderabad/hitec-city",
  "/in/coworking-space/ranga-reddy/hanuman-nagar":
    "/in/coworking-space/hyderabad/hanuman-nagar",
  "/in/coworking-space/ranga-reddy/madhapur":
    "/in/coworking-space/hyderabad/madhapur",
  "/in/coworking-space/ranga-reddy/kondapur":
    "/in/coworking-space/hyderabad/kondapur",
  "/in/coworking-space/ranga-reddy/kothaguda":
    "/in/coworking-space/hyderabad/kothaguda",
  "/in/coworking-space/ranga-reddy/kukatpally":
    "/in/coworking-space/hyderabad/kukatpally",
  "/in/coworking-space/ranga-reddy/financial-district":
    "/in/coworking-space/hyderabad/financial-district",
  "/in/coworking-space/ranga-reddy/mind-space":
    "/in/coworking-space/hyderabad/mind-space",
  "/in/coworking-space/ranga-reddy/toli-chowki":
    "/in/coworking-space/hyderabad/toli-chowki",
  "/in/coworking-space/bangalore-urban/bengaluru": "/in/coworking/bengaluru",
  "/in/coworking/bengaluru": "/in/coworking/bangalore",
  "/in/coworking-space/bangalore-urban/infantry-road":
    "/in/coworking-space/bangalore/infantry-road",
  "/in/coworking-space/bangalore-urban/indiranagar":
    "/in/coworking-space/bangalore/indiranagar",
  "/in/coworking-space/bangalore-urban/koramangala":
    "/in/coworking-space/bangalore/koramangala",
  "/in/coworking-space/bangalore-urban/bellandur":
    "/in/coworking-space/bangalore/bellandur",
  "/in/coworking-space/bangalore-urban/residency-road":
    "/in/coworking-space/bangalore/residency-road",
  "/in/coworking-space/bangalore-urban/hsr-layout":
    "/in/coworking-space/bangalore/hsr-layout",
  "/in/coworking-space/bangalore-urban/whitefield":
    "/in/coworking-space/bangalore/whitefield",
  "/in/coworking-space/bangalore-urban/shanti-nagar":
    "/in/coworking-space/bangalore/shanti-nagar",
  "/in/coworking-space/bangalore-urban/uttarahalli-hobli":
    "/in/coworking-space/bangalore/uttarahalli-hobli",
  "/in/coworking-space/bangalore-urban/mahalakshmi-layout":
    "/in/coworking-space/bangalore/mahalakshmi-layout",
  "/in/coworking-space/bangalore-urban/jayanagar":
    "/in/coworking-space/bangalore/jayanagar",
  "/in/coworking-space/bangalore-urban/yelahanka":
    "/in/coworking-space/bangalore/yelahanka",
  "/in/coworking-space/bangalore-urban/vasanth-nagar":
    "/in/coworking-space/bangalore/vasanth-nagar",
  "/in/coworking-space/bangalore-urban/pulikeshi-nagar":
    "/in/coworking-space/bangalore/pulikeshi-nagar",
  "/in/coworking-space/bangalore-urban/btm-layout":
    "/in/coworking-space/bangalore/btm-layout",
  "/in/coworking-space/bangalore-urban/marathahalli":
    "/in/coworking-space/bangalore/marathahalli",
  "/in/coworking-space/bangalore-urban/naagarabhaavi":
    "/in/coworking-space/bangalore/naagarabhaavi",
  "/in/coworking-space/bangalore/naagarabhaavi":
    "/in/coworking-space/bangalore/naagarabhavi",
  "/in/coworking-space/bangalore-urban/domlur":
    "/in/coworking-space/bangalore/domlur",
  "/in/coworking-space/bangalore-urban/hosur-road":
    "/in/coworking-space/bangalore/hosur-road",
  "/in/coworking-space/bangalore-urban/sarjapura":
    "/in/coworking-space/bangalore/sarjapura",
  "/in/coworking-space/bangalore-urban/sanjaynagar":
    "/in/coworking-space/bangalore/sanjaynagar",
  "/in/coworking-space/bangalore/sanjaynagar":
    "/in/coworking-space/bangalore/sanjay-nagar",
  "/in/coworking-space/bangalore-urban/j.-p.-nagar":
    "/in/coworking-space/bangalore/jp-nagar",
  "/in/coworking-space/bangalore/j.-p.-nagar":
    "/in/coworking-space/bangalore/jp-nagar",
  "/in/coworking-space/bangalore-urban/electronic-city":
    "/in/coworking-space/bangalore/electronic-city",
  "/in/coworking-space/bangalore-urban/sadashiva-nagar":
    "/in/coworking-space/bangalore/sadashiva-nagar",
  "/in/coworking-space/bangalore-urban/rajajinagar":
    "/in/coworking-space/bangalore/rajajinagar",
  "/in/coworking-space/bangalore-urban/outer-ring-road":
    "/in/coworking-space/bangalore/outer-ring-road",
  "/in/coworking-space/bangalore/bannerghatta-main-road":
    "/in/coworking-space/bangalore/bannerghatta-road",
  "/in/coworking-space/bangalore-urban/binnipete":
    "/in/coworking-space/bangalore/binnipete",
  "/in/coworking-space/bangalore-urban/old-madras-road":
    "/in/coworking-space/bangalore/old-madras-road",
  "/in/coworking-space/bangalore-urban/banashankari":
    "/in/coworking-space/bangalore/banashankari",
  "/in/coworking-space/bengaluru/banashankari":
    "/in/coworking-space/bangalore/banashankari",
  "/in/coworking-space/bangalore-urban/kalyan-nagar":
    "/in/coworking-space/bangalore/kalyan-nagar",
  "/in/coworking-space/bangalore-urban/sarjapur-road":
    "/in/coworking-space/bangalore/sarjapur-road",
  "/in/coworking-space/bengaluru/bannerghatta-road":
    "/in/coworking-space/bangalore/bannerghatta-road",
  "/in/coworking-space/delhi/barakhamba-road":
    "/in/coworking-space/delhi/barakhamba",
  "/in/coworking-space/delhi/pitam-pura": "/in/coworking-space/delhi/pitampura",
  "/in/coworking-space/delhi/saidulajab":
    "/in/coworking-space/delhi/saidullajab",
  "/in/coworking-space/delhi/mohan-cooperative-industrial-estate":
    "/in/coworking-space/delhi/mohan-estate",
  "/in/coworking-space/bengaluru/bellandur":
    "/in/coworking-space/bangalore/bellandur",
  "/in/coworking-space/bengaluru/binnipete":
    "/in/coworking-space/bangalore/binnipete",
  "/in/coworking-space/bengaluru/brookefield":
    "/in/coworking-space/bangalore/brookefield",
  "/in/coworking-space/bengaluru/btm-layout":
    "/in/coworking-space/bangalore/btm-layout",
  "/in/coworking-space/bengaluru/domlur":
    "/in/coworking-space/bangalore/domlur",
  "/in/coworking-space/bengaluru/electronic-city":
    "/in/coworking-space/bangalore/electronic-city",
  "/in/coworking-space/bengaluru/fraser-town":
    "/in/coworking-space/bangalore/fraser-town",
  "/in/coworking-space/bengaluru/hosur--road":
    "/in/coworking-space/bangalore/hosur-road",
  "/in/coworking-space/bengaluru/hsr-layout":
    "/in/coworking-space/bangalore/hsr-layout",
  "/in/coworking-space/bengaluru/indiranagar":
    "/in/coworking-space/bangalore/indiranagar",
  "/in/coworking-space/bengaluru/infantry-road":
    "/in/coworking-space/bangalore/infantry-road",
  "/in/coworking-space/bengaluru/jayanagar":
    "/in/coworking-space/bangalore/jayanagar",
  "/in/coworking-space/bengaluru/jp-nagar":
    "/in/coworking-space/bangalore/jp-nagar",
  "/in/coworking-space/bengaluru/kalyan-nagar":
    "/in/coworking-space/bangalore/kalyan-nagar",
  "/in/coworking-space/bengaluru/koramangala":
    "/in/coworking-space/bangalore/koramangala",
  "/in/coworking-space/bengaluru/mahalakshmipuram-layout":
    "/in/coworking-space/bangalore/mahalakshmipuram-layout",
  "/in/coworking-space/bengaluru/marathahalli":
    "/in/coworking-space/bangalore/marathahalli",
  "/in/coworking-space/bengaluru/mg-road":
    "/in/coworking-space/bangalore/mg-road",
  "/in/coworking-space/bengaluru/naagarabhavi":
    "/in/coworking-space/bangalore/naagarabhavi",
  "/in/coworking-space/bengaluru/nagarbhavi":
    "/in/coworking-space/bangalore/nagarbhavi",
  "/in/coworking-space/bengaluru/old-madras-road":
    "/in/coworking-space/bangalore/old-madras-road",
  "/in/coworking-space/bengaluru/outer-ring-road":
    "/in/coworking-space/bangalore/outer-ring-road",
  "/in/coworking-space/bengaluru/rajajinagar":
    "/in/coworking-space/bangalore/rajajinagar",
  "/in/coworking-space/bengaluru/residency-road":
    "/in/coworking-space/bangalore/residency-road",
  "/in/coworking-space/bengaluru/sadashivanagar":
    "/in/coworking-space/bangalore/sadashivanagar",
  "/in/coworking-space/bengaluru/sanjay-nagar":
    "/in/coworking-space/bangalore/sanjay-nagar",
  "/in/coworking-space/bengaluru/sarjapur-road":
    "/in/coworking-space/bangalore/sarjapur-road",
  "/in/coworking-space/bengaluru/shanti-nagar":
    "/in/coworking-space/bangalore/shanti-nagar",
  "/in/coworking-space/bengaluru/uttarahalli":
    "/in/coworking-space/bangalore/uttarahalli",
  "/in/coworking-space/bengaluru/vasanth-nagar":
    "/in/coworking-space/bangalore/vasanth-nagar",
  "/in/coworking-space/bengaluru/whitefield":
    "/in/coworking-space/bangalore/whitefield",
  "/in/coworking-space/bengaluru/yelahanka":
    "/in/coworking-space/bangalore/yelahanka",
  "/in/coworking/pimpri-chinchwad": "/in/coworking-space/pune/pimpri-chinchwad",
  "/in/coworking-space/bangalore-urban/bannerghatta-main-road":
    "/in/coworking-space/bangalore/bannerghatta-main-road",
  "/in/coworking-space/bangalore-urban/brookefield":
    "/in/coworking-space/bangalore/brookefield",
  "/in/coworking-space/bangalore-division/bengaluru": "/in/coworking/bengaluru",
  "/in/coworking-space/bangalore-division/infantry-road":
    "/in/coworking-space/bangalore/infantry-road",
  "/in/coworking-space/bangalore-division/indiranagar":
    "/in/coworking-space/bangalore/indiranagar",
  "/in/coworking-space/bangalore-division/koramangala":
    "/in/coworking-space/bangalore/koramangala",
  "/in/coworking-space/bangalore-division/bellandur":
    "/in/coworking-space/bangalore/bellandur",
  "/in/coworking-space/bangalore-division/residency-road":
    "/in/coworking-space/bangalore/residency-road",
  "/in/coworking-space/bangalore-division/hsr-layout":
    "/in/coworking-space/bangalore/hsr-layout",
  "/in/coworking-space/bangalore-division/whitefield":
    "/in/coworking-space/bangalore/whitefield",
  "/in/coworking-space/bangalore-division/shanti-nagar":
    "/in/coworking-space/bangalore/shanti-nagar",
  "/in/coworking-space/bangalore-division/uttarahalli-hobli":
    "/in/coworking-space/bangalore/uttarahalli-hobli",
  "/in/coworking-space/bangalore-division/mahalakshmi-layout":
    "/in/coworking-space/bangalore/mahalakshmi-layout",
  "/in/coworking-space/bangalore-division/jayanagar":
    "/in/coworking-space/bangalore/jayanagar",
  "/in/coworking-space/bangalore-division/yelahanka":
    "/in/coworking-space/bangalore/yelahanka",
  "/in/coworking-space/bangalore-division/vasanth-nagar":
    "/in/coworking-space/bangalore/vasanth-nagar",
  "/in/coworking-space/bangalore-division/pulikeshi-nagar":
    "/in/coworking-space/bangalore/pulikeshi-nagar",
  "/in/coworking-space/bangalore-division/btm-layout":
    "/in/coworking-space/bangalore/btm-layout",
  "/in/coworking-space/bangalore-division/marathahalli":
    "/in/coworking-space/bangalore/marathahalli",
  "/in/coworking-space/bangalore-division/naagarabhaavi":
    "/in/coworking-space/bangalore/naagarabhaavi",
  "/in/coworking-space/bangalore-division/domlur":
    "/in/coworking-space/bangalore/domlur",
  "/in/coworking-space/bangalore-division/hosur-road":
    "/in/coworking-space/bangalore/hosur-road",
  "/in/coworking-space/bangalore-division/sarjapura":
    "/in/coworking-space/bangalore/sarjapura",
  "/in/coworking-space/bangalore-division/sanjaynagar":
    "/in/coworking-space/bangalore/sanjaynagar",
  "/in/coworking-space/bangalore-division/j.-p.-nagar":
    "/in/coworking-space/bangalore/jp-nagar",
  "/in/coworking-space/bangalore-division/electronic-city":
    "/in/coworking-space/bangalore/electronic-city",
  "/in/coworking-space/bangalore-division/sadashiva-nagar":
    "/in/coworking-space/bangalore/sadashiva-nagar",
  "/in/coworking-space/bangalore-division/rajajinagar":
    "/in/coworking-space/bangalore/rajajinagar",
  "/in/coworking-space/bangalore-division/outer-ring-road":
    "/in/coworking-space/bangalore/outer-ring-road",
  "/in/coworking-space/bangalore-division/binnipete":
    "/in/coworking-space/bangalore/binnipete",
  "/in/coworking-space/bangalore-division/old-madras-road":
    "/in/coworking-space/bangalore/old-madras-road",
  "/in/coworking-space/bangalore-division/banashankari":
    "/in/coworking-space/bangalore/banashankari",
  "/in/coworking-space/bangalore-division/kalyan-nagar":
    "/in/coworking-space/bangalore/kalyan-nagar",
  "/in/coworking-space/bangalore-division/sarjapur-road":
    "/in/coworking-space/bangalore/sarjapur-road",
  "/in/coworking-space/bangalore-division/bannerghatta-main-road":
    "/in/coworking-space/bangalore/bannerghatta-main-road",
  "/in/coworking-space/bangalore-division/brookefield":
    "/in/coworking-space/bangalore/brookefield",
  "/in/coworking-space/new-delhi/connaught-place":
    "/in/coworking-space/delhi/connaught-place",
  "/in/coworking-space/south-delhi/saket": "/in/coworking-space/delhi/saket",
  "/in/coworking-space/south-west-delhi/aerocity":
    "/in/coworking-space/delhi/aerocity",
  "/in/coworking-space/new-delhi/aerocity":
    "/in/coworking-space/delhi/aerocity",
  "/in/coworking-space/central-delhi/barakhamba-road":
    "/in/coworking-space/delhi/barakhamba-road",
  "/in/coworking-space/new-delhi/anand-vihar":
    "/in/coworking-space/delhi/anand-vihar",
  "/in/coworking-space/new-delhi/ashok-park-main":
    "/in/coworking-space/delhi/ashok-park",
  "/in/coworking-space/new-delhi/badarpur":
    "/in/coworking-space/delhi/badarpur",
  "/in/coworking-space/delhi-division/connaught-place":
    "/in/coworking-space/delhi/connaught-place",
  "/in/coworking-space/delhi-division/saket": "/in/coworking-space/delhi/saket",
  "/in/coworking-space/delhi-division/aerocity":
    "/in/coworking-space/delhi/aerocity",
  "/in/coworking-space/delhi-division/barakhamba-road":
    "/in/coworking-space/delhi/barakhamba-road",
  "/in/coworking-space/delhi-division/anand-vihar":
    "/in/coworking-space/delhi/anand-vihar",
  "/in/coworking-space/delhi-division/ashok-park-main":
    "/in/coworking-space/delhi/ashok-park",
  "/in/coworking-space/delhi-division/badarpur":
    "/in/coworking-space/delhi/badarpur",
  "/in/coworking-space/konkan-division/andheri":
    "/in/coworking-space/mumbai/andheri",
  "/in/coworking-space/konkan-division/andheri-east":
    "/in/coworking-space/mumbai/andheri-east",
  "/in/coworking-space/konkan-division/ballard-estate":
    "/in/coworking-space/mumbai/ballard-estate",
  "/in/coworking-space/konkan-division/bandra-kurla-complex":
    "/in/coworking-space/mumbai/bandra-kurla-complex",
  "/in/coworking-space/konkan-division/chembur":
    "/in/coworking-space/mumbai/chembur",
  "/in/coworking-space/konkan-division/churchgate":
    "/in/coworking-space/mumbai/churchgate",
  "/in/coworking-space/konkan-division/goregaon-west":
    "/in/coworking-space/mumbai/goregaon-west",
  "/in/coworking-space/konkan-division/kandivali":
    "/in/coworking-space/mumbai/kandivali",
  "/in/coworking-space/konkan-division/marine-lines":
    "/in/coworking-space/mumbai/marine-lines",
  "/in/coworking-space/konkan-division/kurla":
    "/in/coworking-space/mumbai/kurla",
  "/in/coworking-space/konkan-division/nahur":
    "/in/coworking-space/mumbai/nahur",
  "/in/coworking-space/konkan-division/vile-parle":
    "/in/coworking-space/mumbai/vile-parle",
  "/in/coworking-space/konkan-division/saki-vihar":
    "/in/coworking-space/mumbai/saki-vihar",
  "/in/coworking-space/konkan-division/nityanand-nagar":
    "/in/coworking-space/mumbai/nityanand-nagar",
  "/in/coworking-space/konkan-division/parel":
    "/in/coworking-space/mumbai/parel",
  "/in/coworking-space/konkan-division/powai":
    "/in/coworking-space/mumbai/powai",
  "/in/coworking-space/konkan-division/prabhadevi":
    "/in/coworking-space/mumbai/prabhadevi",
  "/in/coworking-space/konkan-division/santacruz":
    "/in/coworking-space/mumbai/santacruz",
  "/in/coworking-space/konkan-division/santacruz-east":
    "/in/coworking-space/mumbai/santacruz-east",
  "/in/coworking-space/konkan-division/santacruz-west":
    "/in/coworking-space/mumbai/santacruz-west",
  "/in/coworking-space/konkan-division/thane":
    "/in/coworking-space/mumbai//thane",
  "/in/coworking-space/konkan-division/vikhroli":
    "/in/coworking-space/mumbai/vikhroli",
  "/in/coworking-space/konkan-division/mulund":
    "/in/coworking-space/mumbai/mulund",
  "/in/coworking-space/konkan-division/malad":
    "/in/coworking-space/mumbai/malad",
  "/in/coworking-space/konkan-division/mahalakshmi":
    "/in/coworking-space/mumbai/mahalakshmi",
  "/in/coworking-space/konkan-division/lower-parel":
    "/in/coworking-space/mumbai/lower-parel",
  "/in/coworking-space/konkan-division/khar-west":
    "/in/coworking-space/mumbai/khar-west",
  "/in/coworking-space/konkan-division/kandivali-west":
    "/in/coworking-space/mumbai/kandivali-west",
  "/in/coworking-space/konkan-division/goregaon":
    "/in/coworking-space/mumbai/goregaon",
  "/in/coworking-space/konkan-division/ghatkopar":
    "/in/coworking-space/mumbai/ghatkopar",
  "/in/coworking-space/konkan-division/deonar":
    "/in/coworking-space/mumbai/deonar",
  "/in/coworking-space/konkan-division/dahisar-east":
    "/in/coworking-space/mumbai/dahisar-east",
  "/in/coworking-space/Mumbai/dahisar-east":
    "/in/coworking-space/mumbai/dahisar-east",
  "/in/coworking-space/konkan-division/borivali":
    "/in/coworking-space/mumbai/borivali",
  "/in/coworking-space/konkan-division/borivali-west":
    "/in/coworking-space/mumbai/borivali-west",
  "/in/coworking-space/konkan-division/borivali-east":
    "/in/coworking-space/mumbai/borivali-east",
  "/i/in/coworking-space/new-delhi/barakhamba-road":
    "/in/coworking-space/delhi/barakhamba",
  "/in/coworking-space/new-delhi/bhikaji-cama-place":
    "/in/coworking-space/new-delhi/bhikaji-cama-place",
  "/in/coworking-space/new-delhi/defence-colony":
    "/in/coworking-space/delhi/defence-colony",
  "/in/coworking-space/new-delhi/dwarka": "/in/coworking-space/delhi/dwarka",
  "/in/coworking-space/new-delhi/green-park":
    "/in/coworking-space/delhi/green-park",
  "/in/coworking-space/new-delhi/hauz-khas-village":
    "/in/coworking-space/delhi/hauz-khas-village",
  "/in/coworking-space/new-delhi/janak-puri":
    "/in/coworking-space/delhi/janak-puri",
  "/in/coworking-space/new-delhi/janakpuri":
    "/in/coworking-space/delhi/janak-puri",
  "/in/coworking-space/new-delhi/jhandewalan":
    "/in/coworking-space/delhi/jhandewalan",
  "/in/coworking-space/new-delhi/kalkaji": "/in/coworking-space/delhi/kalkaji",
  "/in/coworking-space/new-delhi/madhu-vihar":
    "/in/coworking-space/delhi/madhu-vihar",
  "/in/coworking-space/new-delhi/mayur-vihar":
    "/in/coworking-space/delhi/mayur-vihar",
  "/in/coworking-space/new-delhi/mohan-estate":
    "/in/coworking-space/delhi/mohan-estate",
  "/in/coworking-space/new-delhi/nehru-place":
    "/in/coworking-space/delhi/nehru-place",
  "/in/coworking-space/new-delhi/netaji-subhash-place":
    "/in/coworking-space/delhi/netaji-subhash-place",
  "/in/coworking-space/new-delhi/okhla": "/in/coworking-space/delhi/okhla",
  "/in/coworking-space/andheri/andheri": "/in/coworking-space/mumbai/andheri",
  "/in/coworking-space/new-delhi/paschim-vihar":
    "/in/coworking-space/delhi/paschim-vihar",
  "/in/coworking-space/new-delhi/pitampura":
    "/in/coworking-space/delhi/pitampura",
  "/coworking-space/new-delhi/preet-vihar":
    "/in/coworking-space/delhi/preet-vihar",
  "/in/coworking-space/new-delhi/rohini": "/in/coworking-space/delhi/rohini",
  "/in/coworking-space/new-delhi/safdarjung-development-area":
    "/in/coworking-space/delhi/safdarjung",
  "/in/coworking-space/new-delhi/saidullajab":
    "/in/coworking-space/delhi/saidullajab",
  "/in/coworking-space/new-delhi/saket": "/in/coworking-space/delhi/saket",
  "/i/in/coworking-space/delhi-division/barakhamba-road":
    "/in/coworking-space/delhi/barakhamba",
  "/in/coworking-space/delhi-division/bhikaji-cama-place":
    "/in/coworking-space/delhi/bhikaji-cama-place",
  "/in/coworking-space/delhi-division/defence-colony":
    "/in/coworking-space/delhi/defence-colony",
  "/in/coworking-space/delhi-division/dwarka":
    "/in/coworking-space/delhi/dwarka",
  "/in/coworking-space/delhi-division/green-park":
    "/in/coworking-space/delhi/green-park",
  "/in/coworking-space/delhi-division/hauz-khas-village":
    "/in/coworking-space/delhi/hauz-khas-village",
  "/in/coworking-space/delhi-division/janak-puri":
    "/in/coworking-space/delhi/janak-puri",
  "/in/coworking-space/delhi-division/janakpuri":
    "/in/coworking-space/delhi/janak-puri",
  "/in/coworking-space/delhi-division/jhandewalan":
    "/in/coworking-space/delhi/jhandewalan",
  "/in/coworking-space/delhi-division/kalkaji":
    "/in/coworking-space/delhi/kalkaji",
  "/in/coworking-space/delhi-division/madhu-vihar":
    "/in/coworking-space/delhi/madhu-vihar",
  "/in/coworking-space/delhi-division/mayur-vihar":
    "/in/coworking-space/delhi/mayur-vihar",
  "/in/coworking-space/delhi-division/mohan-estate":
    "/in/coworking-space/delhi/mohan-estate",
  "/in/coworking-space/delhi-division/nehru-place":
    "/in/coworking-space/delhi/nehru-place",
  "/in/coworking-space/delhi-division/netaji-subhash-place":
    "/in/coworking-space/delhi/netaji-subhash-place",
  "/in/coworking-space/delhi-division/okhla": "/in/coworking-space/delhi/okhla",
  "/in/coworking-space/delhi-division/paschim-vihar":
    "/in/coworking-space/delhi/paschim-vihar",
  "/in/coworking-space/delhi-division/pitampura":
    "/in/coworking-space/delhi/pitampura",
  "/coworking-space/delhi-division/preet-vihar":
    "/in/coworking-space/delhi/preet-vihar",
  "/in/coworking-space/delhi-division/rohini":
    "/in/coworking-space/delhi/rohini",
  "/in/coworking-space/delhi-division/safdarjung-development-area":
    "/in/coworking-space/delhi/safdarjung",
  "/in/coworking-space/delhi-division/saidullajab":
    "/in/coworking-space/delhi/saidullajab",
  "/in/coworking-space/delhi-division/safdarjung-enclave":
    "/in/coworking-space/delhi/safdarjung",
  "/in/coworking-space/delhi-division/saket": "/in/coworking-space/delhi/saket",
  "/in/coworking-space/jaipur-division/jaipur": "/in/coworking/jaipur",
  "/in/coworking-space/jaipur-division/ashok-nagar":
    "/in/coworking-space/jaipur/ashok-nagar",
  "/in/coworking-space/jaipur-division/bais-godam":
    "/in/coworking-space/jaipur/bais-godam",
  "/in/coworking-space/jaipur-division/brijlalpura":
    "/in/coworking-space/jaipur/brijlalpura",
  "/in/coworking-space/jaipur-division/civil-lines":
    "/in/coworking-space/jaipur/civil-lines",
  "/in/coworking-space/jaipur-division/durgapura":
    "/in/coworking-space/jaipur/durgapura",
  "/in/coworking-space/jaipur-division/gopal-pura-mode":
    "/in/coworking-space/jaipur/gopal-pura-mode",
  "/in/coworking-space/jaipur-division/heerapura":
    "/in/coworking-space/jaipur/heerapura",
  "/in/coworking-space/jaipur-division/jagatpura":
    "/in/coworking-space/jaipur/jagatpura",
  "/in/coworking-space/jaipur-division/jawahar-nagar":
    "/in/coworking-space/jaipur/jawahar-nagar",
  "/in/coworking-space/jaipur-division/lalkothi":
    "/in/coworking-space/jaipur/lalkothi",
  "/in/coworking-space/bengaluru/dahisar-east": "/in/coworking/bangalore",
  "/in/coworking-space/Mumbai/Andheri-East":
    "/in/coworking-space/mumbai/andheri-east",
  "/in/coworking-space/bengaluru/mahalakshmipuram-layout":
    "/in/coworking/bangalore",
  "/in/coworking-space/bengaluru/btm-4th-stage": "/in/coworking/bangalore",
  "/in/coworking/chennai/perungudi": "/in/coworking/chennai/perungudi",
  "/coworking-space/smartworks-bidhannagar-1324": "/in/coworking/kolkata",
  "/in/coworking-space/pune": "/in/coworking/pune",
  "/coworking-space/hive-hostel-andheri-east-1836":
    "/in/coworking-space/mumbai/andheri-east",
  "/coworking-space/Community-Coworks-Andheri-West-1843":
    "/coworking-space/community-coworks-andheri-west-1843",
  "/coworking-space/EFC-BKC-1235": "/coworking-space/efc-bkc-1235",
  "/contact-form?space_id=1558": "/",
  "/coworking-space/Workcult-Coworking-Space-Viman-Nagar-203":
    "/coworking-space/workcult-coworking-space-viman-nagar-203",
  "/in/coworking-space/navi-mumbai/vashi":
    "/in/coworking-space/navi-mumbai/vashi",
  "/coworking-space/cowrks-powai-72": "/in/coworking/mumbai",
  "/in/coworking-space/bengaluru/goregaon-west":
    "/in/coworking-space/mumbai/goregaon",
  "/in/coworking-space/gurugram/-sector 18": "/in/coworking/gurgaon",
  "/in/coworking/delhi": "/in/coworking/delhi",
  "/in/coworking-space/bengaluru/fraser-town":
    "/in/coworking-space/bangalore/fraser-town",
  "/in/coworking-space/bengaluru/marathahalli": "/in/coworking/bangalore",
  "/in/coworking/nanakaramguda": "/in/coworking/nanakaramguda",
  "/in/coworking-space/nashik": "/in/coworking/nashik",
  "/coworking-space/hive-hostel-andheri-east-1836":
    "/coworking-space/hive-hostel-andheri-east-1836",
  "/coworking-space/Community-Coworks-Andheri-West-1843":
    "/in/coworking/mumbai",
  "/in/coworking-space/jaipur/lalkothi": "/in/coworking-space/jaipur/lalkothi",
  "/coworking-space/EFC-BKC-1235":
    "/in/coworking-space/mumbai/bandra-kurla-complex",
  "/coworking-space/Workcult-Coworking-Space-Viman-Nagar-203":
    "/in/coworking/pune",
  "/in/coworking-space/navi-mumbai/vashi": "/in/coworking/navi-mumbai",
  "/in/coworking/nanakaramguda": "/in/coworking/hyderabad",
  "/": "/",
  "/in/coworking-space/delhi": "/in/coworking/delhi",
  "/in/coworking-space/bengaluru/saki-vihar": "/in/coworking/bangalore",
  "/in/coworking-space/bangalore/indiranagar":
    "/in/coworking-space/bangalore/indiranagar",
  "/in/coworking-space/nanakaramguda": "/in/coworking-space/nanakaramguda",
  "/in/coworking-space/noida/-sector-63": "/in/coworking-space/noida/sector-63",
  "/in/coworking-space/gurgaon": "/in/coworking/gurgaon",
  "/in/coworking-space/bangalore/rama-nagar":
    "/in/coworking-space/bangalore/rama-nagar",
  "/in/coworking-space/navi mumbai/ghansoli": "/in/coworking/navi-mumbai",
  "/in/coworking-space/new-delhi/bhikaji-cama-place": "/in/coworking/delhi",
  "/in/coworking-space/bangalore/sanjay-nagar":
    "/in/coworking-space/bangalore/sanjay-nagar",
  "/in/coworking-space/bengaluru/lower-parel":
    "/in/coworking-space/mumbai/lower-parel",
  "/in/coworking/chennai/perumbakkam": "/in/coworking/chennai/perumbakkam",
  "/in/coworking-space/bangalore/yerawada":
    "/in/coworking-space/bangalore/yerawada",
  "/in/coworking-space/jaipur/panchyawala":
    "/in/coworking-space/jaipur/panchyawala",
  "/in/coworking-space/new delhi/okhla-phase 3": "/in/coworking/delhi",
  "/in/coworking-space/mumbai/bandra-kurla complex":
    "/in/coworking-space/mumbai/bandra-kurla-complex",
  "/in/coworking-space/bangalore/mahadevapura":
    "/in/coworking-space/bangalore/mahadevapura",
  "/in/coworking-space/mumbai/nityanand-nagar":
    "/in/coworking-space/mumbai/nityanand-nagar",
  "/coworking-space/lets-work-(opening-soon)-andheri-east-2119":
    "/in/coworking-space/mumbai/andheri-east",
  "/coworking-space/one-co.work-nungambakkam-1646": "/in/coworking/chennai",
  "/in/coworking-space/hyderabad/ballard-estate":
    "/in/coworking-space/hyderabad/ballard-estate",
  "/coworking-space/603-The-CoWorking-Space-Powai-68": "/in/coworking/mumbai",
  "/coworking-space/WeWork-Koramangala-1933": "/in/coworking/bangalore",
  "/in/coworking-space/gurugram/camp": "/in/coworking-space/gurugram/camp",
  "/in/coworking-space/bengaluru/electronic-city":
    "/in/coworking-space/bangalore/electronic-city",
  "/in/coworking-space/bengaluru/hsr-layout":
    "/in/coworking-space/bangalore/hsr-layout",
  "/in/coworking-space/new delhi/pushp-vihar": "/in/coworking/delhi",
  "/in/coworking-space/gurugram/-sector 45": "/in/coworking/gurgaon",
  "/in/coworking-space/mumbai/andheri": "/in/coworking-space/mumbai/andheri",
  "/in/coworking-space/bengaluru/kalyan-nagar": "/in/coworking/bangalore",
  "/pages/faqs": "/",
  "/coworking-space/WrkPod-Avarampalayam-1745": "/in/coworking/coimbatore",
  "/in/coworking-space/new-delhi/aerocity": "/in/coworking/delhi",
  "/in/coworking-space/hyderabad/kurla": "/in/coworking-space/mumbai/kurla",
  "/in/coworking-space/new delhi/malviya-nagar": "/in/coworking/delhi",
  "/in/coworking-space/navi-mumbai/navi-mumbai": "/in/coworking/navi-mumbai",
  "/coworking-space/bridge -whitefield-855": "/in/coworking/bangalore",
  "/in/coworking-space/mumbai/vile-parle west":
    "/in/coworking-space/mumbai/vile-parle",
  "/coworking-space/pinc-squares--jp-nagar-764":
    "//coworking-space/pinc-squares-jp-nagar-764",
  "/in/coworking-space/bengaluru/outer-ring-road":
    "/in/coworking-space/bangalore/outer-ring-road",
  "/in/coworking-space/new-delhi/okhla": "/in/coworking-space/delhi/okhla",
  "/in/coworking-space/bangalore/viman-nagar":
    "/in/coworking-space/bangalore/viman-nagar",
  "/spaces/inactivespaces": "/",
  "/in/coworking-space/ahmedabad/ellisbridge":
    "/in/coworking-space/ahmedabad/ellisbridge",
  "/in/coworking/vadodara": "/in/coworking/vadodara",
  "/coworking-space/Regus-Whitefield-838":
    "/coworking-space/regus-whitefield-838",
  "/spaces/user-bookings-request": "/",
  "/pages/mailinbox": "/",
  "/spaces/leads": "/",
  "/wallet/creditWalletPlans": "/",
  "/spaces/visit-enquiry": "/",
  "/coworking-space/Regus-Ashok-Nagar-1902": "/in/coworking/chennai",
  "/coworking-space/IndiQube-HM-Vibha-Koramangala-876":
    "/coworking-space/indiqube-hm-vibha-koramangala-876",
  "/coworking-space/Awfis-Sector-63-1589":
    "/coworking-space/awfis-sector-63-1589",
  "/in/coworking-space/Mumbai/Lower-Parel":
    "/in/coworking-space/mumbai/lower-parel",
  "/coworking-space/Awfis-Powai-72": "/in/coworking/mumbai",
  "/coworking-space/The-Executive-Centre-Thousand-Lights-1667":
    "/coworking-space/the-executive-centre-thousand-lights-1667",
  "/contact-form/mumbai/goregaoneast": "/contact-form/mumbai/goregaon-east",
  "/coworking-space/nukleus-coworking-connaught-place-1365":
    "/coworking-space/nukleus-coworking-connaught-place-1365",
  "/contact-form/pune/hinjewadi": "/contact-form/pune/hinjewadi",
  "/coworking-space/the-maker's-space-lalkothi-1082":
    "/coworking-space/the-makers-space-lalkothi-1082",
  "/in/coworking-space/bengaluru/santacruz-west":
    "/in/coworking-space/mumbai/santacruz-west",
  "/?trk=public_post_reshare-text": "/",
  "/in/coworking-space/new delhi/barakhamba":
    "/in/coworking-space/delhi/barakhamba",
  "/in/coworking-space/new-delhi/east-of kailash": "/in/coworking/delhi",
  "/in/coworking-space/new delhi/chhatarpur":
    "/in/coworking-space/delhi/chhatarpur",
  "/in/coworking-space/delhi/thane": "/in/coworking/thane",
  "/in/coworking-space/mumbai/saki-vihar":
    "/in/coworking-space/mumbai/saki-vihar",
  "/in/coworking-space/bangalore/balewadi": "/in/coworking/bangalore",
  "/spaces/spacesDetails": "/",
  "/in/coworking-space/bengaluru/bandra-kurla-complex":
    "/in/coworking-space/mumbai/bandra-kurla-complex",
  "/in/coworking-space/bangalore/marathahalli": "/in/coworking/bangalore",
  "/in/coworking-space/delhi/pimpri-chinchwad":
    "/in/coworking-space/pune/pimpri-chinchwad",
  "/in/coworking-space/bengaluru/queen-road":
    "/in/coworking-space/bangalore/queen-road",
  "/in/coworking-space/new delhi/sainik-farm": "/in/coworking/delhi",
  "/in/coworking-space/new delhi/janpath": "/in/coworking-space/delhi/janpath",
  "/in/coworking-space/bengaluru/kr-puram":
    "/in/coworking-space/bangalore/kr-puram",
  "/in/coworking-space/bandra-east/bandra-kurla-complex":
    "/in/coworking-space/mumbai/bandra-kurla-complex",
  "/in/coworking-space/mumbai/pimpri-chinchwad":
    "/in/coworking-space/pune/pimpri-chinchwad",
  "/in/coworking-space/bengaluru/dadar": "/in/coworking-space/mumbai/dadar",
  "/in/coworking-space/bangalore/ballard-estate":
    "/in/coworking-space/mumbai/ballard-estate",
  "/in/coworking-space/bangalore/marine-lines":
    "/in/coworking-space/mumbai/marine-lines",
  "/in/coworking/new-delhi": "/in/coworking/delhi",
  "/in/coworking-space/new-delhi/hauz-khas-village":
    "/in/coworking-space/delhi/hauz-khas-village",
  "/in/coworking-space/hyderabad/malad": "/in/coworking-space/mumbai/malad",
  "/apps/chat": "/",
  "/custompages/forgotpassword": "/",
  "/in/coworking-space/bangalore/maharshi-nagar":
    "/in/coworking-space/bangalore/maharshi-nagar",
  "/dashboard": "/",
  "/coworking-space/collabworks-cuckoo-cafe-bandra-west-66":
    "/in/coworking/mumbai",
  "/in/coworking-space/bangalore/goregaon":
    "/in/coworking-space/mumbai/goregaon",
  "/in/coworking-space/gurugram/goregaon": "/in/coworking-space/gurugram",
  "/in/coworking-space/gurugram/pimpri-chinchwad":
    "/in/coworking-space/pune/pimpri-chinchwad",
  "/in/coworking-space/bengaluru/goregaon":
    "/in/coworking-space/mumbai/goregaon",
  "/coworking-space/indiqube-chetpet-1738":
    "/coworking-space/indiqube-chetpet-1738",
  "/in/coworking-space/bangalore/thane": "/in/coworking/thane",
  "/in/coworking-space/Mumbai/sewri-chembur-road":
    "/in/coworking-space/mumbai/sewri-chembur-road",
  "/in/coworking-space/bengaluru/thane": "/in/coworking/thane",
  "/in/coworking-space/mumbai/santacruz-east":
    "/in/coworking-space/mumbai/santacruz-east",
  "/in/coworking-space/new-delhi/anand-vihar":
    "/in/coworking-space/delhi/anand-vihar",
  "/in/coworking-space/new-delhi/safdarjung-development-area":
    "/in/coworking-space/delhi/safdarjung-development-area",
  "/in/coworking-space/new-delhi/kalkaji": "/in/coworking-space/delhi/kalkaji",
  "/coworking-space/workspaces-by-innova-sector-63-1447":
    "/coworking-space/workspaces-by-innova-sector-63-1447",
  "/in/coworking-space/delhi/anand-vihar":
    "/in/coworking-space/delhi/anand-vihar",
  "/coworking-space/91springboard-sector-28-1610":
    "/coworking-space/91springboard-sector-28-1610",
  "/in/coworking-space/kolkata/salt-lake":
    "/in/coworking-space/kolkata/salt-lake",
  "/in/coworking-space/delhi/pitampura": "/in/coworking-space/delhi/pitampura",
  "/in/coworking-space/bengaluru/kandivali-west":
    "/in/coworking-space/mumbai/kandivali-west",
  "/in/coworking-space/gurugram/aundh": "/in/coworking-space/gurugram",
  "/in/coworking-space/new-delhi/sector-63":
    "/in/coworking-space/delhi/sector-63",
  "/in/coworking-space/new-delhi/shahpur-jat":
    "/in/coworking-space/delhi/shahpur-jat",
  "/in/coworking-space/new-delhi/south-delhi":
    "/in/coworking-space/delhi/south-delhi",
  "/in/coworking-space/Mumbai/sakinaka": "/in/coworking-space/mumbai/sakinaka",
  "/in/coworking-space/new-delhi/saket": "/in/coworking-space/delhi/saket",
  "/in/coworking-space/chandigarh/phase-- i": "/in/coworking/chandigarh",
  "/in/coworking-space/new-delhi/badarpur":
    "/in/coworking-space/delhi/badarpur",
  "/pages/editprofile": "/",
  "/in/coworking-space/Mumbai/nityanand-nagar": "/in/coworking/mumbai",
  "/in/coworking-space/bangalore/kandivali":
    "/in/coworking-space/mumbai/kandivali-west",
  "/coworking-space/CoWork88-Chembur-251": "/in/coworking/mumbai",
  "/in/coworking-space/bangalore/whitefield":
    "/in/coworking-space/bangalore/whitefield",
  "/in/coworking/chandigarh": "/in/coworking/chandigarh",
  "/in/coworking-space/new-delhi/rohini": "/in/coworking-space/delhi/rohini",
  "/in/coworking-space/mumbai/saki-vihar": "/in/coworking/mumbai",
  "/in/coworking-space/delhi/netaji-subhash-place":
    "/in/coworking-space/delhi/netaji-subhash-place",
  "/in/coworking-space/bangalore/residency-road":
    "/in/coworking-space/bangalore/residency-road",
  "/in/coworking-space/new-delhi/turkman-gate": "/in/coworking/delhi",
  "/coworking-space/Bhive-11-Badarpur-445": "/in/coworking/delhi",
  "/in/coworking/mumbai": "/in/coworking/mumbai",
  "/in/coworking/Mumbai": "/in/coworking/mumbai",
  "/in/coworking-space/delhi/ashok-park":
    "/in/coworking-space/delhi/ashok-park",
  "/coworking-space/So-Share-Shahpur-Jat-551": "/in/coworking/delhi",
  "/in/coworking-space/delhi/mohan-estate":
    "/in/coworking-space/delhi/mohan-estate",
  "/coworking-space/obeya-vibes-hsr-layout-833":
    "/coworking-space/obeya-vibes-hsr-layout-833",
  "/in/coworking-space/bangalore/binnipete":
    "/in/coworking-space/bangalore/binnipete",
  "/coworking-space/Awfis-Baner-394": "/in/coworking/pune",
  "/in/coworking-space/delhi/toli-chowki":
    "/in/coworking-space/delhi/toli-chowki",
  "/in/coworking-space/bengaluru/yelahanka":
    "/in/coworking-space/bangalore/yelahanka",
  "/coworking-space/Sanzar-Spaces-Mulund-590": "/in/coworking/mumbai",
  "/coworking-space/segment-spaces-kukatpally-306":
    "/coworking-space/segment-spaces-kukatpally-306",
  "/coworking-space/goodworks-cowork-whitefield-852":
    "/coworking-space/goodworks-cowork-whitefield-852",
  "/coworking-space/blue-coworks-lower-parel-586":
    "/coworking-space/blue-coworks-lower-parel-586",
  "/coworking-space/regus-vastrapur-993":
    "/coworking-space/regus-vastrapur-993",
  "/coworking-space/redbrick-offices-thane-88":
    "/coworking-space/redbrick-offices-thane-88",
  "/in/coworking-space/chennai/-alwarpet":
    "/in/coworking-space/chennai/alwarpet",
  "/coworking-space/executive-spaces-andheri-east-1788":
    "/coworking-space/executive-spaces-andheri-east-1788",
  "/coworking-space/attic-space-krishvi-indiranagar-734":
    "/coworking-space/attic-space-krishvi-indiranagar-734",
  "/coworking-space/work365-spaces-indiranagar-472":
    "/coworking-space/work365-spaces-indiranagar-472",
  "/coworking-space/wework-andheri-east-2":
    "/coworking-space/wework-andheri-east-2",
  "/coworking-space/indiqube-epsilon-domlur--690":
    "/coworking-space/indiqube-epsilon-domlur-690",
  "/coworking-space/indiqube-lakeside-outer-ring-road-907":
    "/coworking-space/indiqube-lakeside-outer-ring-road-907",
  "/coworking-space/wizworks-sector-16a-1423":
    "/coworking-space/wizworks-sector-16a-1423",
  "/coworking-space/theco-space-jp-nagar-529":
    "/coworking-space/theco-space-jp-nagar-529",
  "/coworking-space/awfis-sector-62-1450":
    "/coworking-space/awfis-sector-62-1450",
  "/in/coworking-space/navi-mumbai/kharghar":
    "/in/coworking-space/navi-mumbai/kharghar",
  "/in/coworking-space/pune/maharshi-nagar":
    "/in/coworking-space/pune/maharshi-nagar",
  "/coworking-space/regus-gomti-nagar-1768":
    "/coworking-space/regus-gomti-nagar-1768",
  "/coworking-space/clowork-newmark-hitec-city-288":
    "/coworking-space/clowork-newmark-hitec-city-288",
  "/coworking-space/we-grow-vashi-1369": "/coworking-space/we-grow-vashi-1369",
  "/in/coworking-space/bangalore/fraser-town":
    "/in/coworking-space/bangalore/fraser-town",
  "/in/coworking-space/pune/hinjewadi": "/in/coworking-space/pune/hinjewadi",
  "/in/coworking-space/pune/viman-nagar":
    "/in/coworking-space/pune/viman-nagar",
  "/coworking-space/gospaze-outer-ring-road-904":
    "/coworking-space/gospaze-outer-ring-road-904",
  "/coworking-space/techspace-hsr-layout-828":
    "/coworking-space/techspace-hsr-layout-828",
  "/in/coworking-space/pune/bavdhan": "/in/coworking-space/pune/bavdhan",
  "/in/coworking-space/ahmedabad/iskcon-cross-road":
    "/in/coworking-space/ahmedabad/iskcon-cross-road",
  "/in/coworking-space/bangalore/yelahanka":
    "/in/coworking-space/bangalore/yelahanka",
  "/coworking-space/bloomdesk-coworking-borivali-east-99":
    "/coworking-space/bloomdesk-coworking-borivali-east-99",
  "/in/coworking-space/hyderabad/madhapur":
    "/in/coworking-space/hyderabad/madhapur",
  "/coworking-space/wework-goregaon-8": "/coworking-space/wework-goregaon-8",
  "/in/coworking-space/bangalore/banashankari":
    "/in/coworking-space/bangalore/banashankari",
  "/in/coworking-space/pune/fatima-nagar":
    "/in/coworking-space/pune/fatima-nagar",
  "/in/coworking-space/hyderabad/ameerpet":
    "/in/coworking-space/hyderabad/ameerpet",
  "/coworking-space/pro-coworking-office-kharghar-1792":
    "/coworking-space/pro-coworking-office-kharghar-1792",
  "/coworking-space/work-for-assets-dwarka-1412":
    "/coworking-space/work-for-assets-dwarka-1412",
  "/in/coworking-space/ahmedabad/science-city-road":
    "/in/coworking-space/ahmedabad/science-city-road",
  "/in/coworking-space/navi-mumbai/airoli":
    "/in/coworking-space/navi-mumbai/airoli",
  "/in/coworking-space/pune/camp": "/in/coworking-space/pune/camp",
  "/in/coworking-space/mumbai/dahisar-east":
    "/in/coworking-space/mumbai/dahisar-east",
  "/in/coworking-space/hyderabad/financial-district":
    "/in/coworking-space/hyderabad/financial-district",
  "/coworking-space/nexus-business-center-jubilee-hills-349":
    "/coworking-space/nexus-business-center-jubilee-hills-349",
  "/coworking-space/workamuse-nungambakkam-1666":
    "/coworking-space/workamuse-nungambakkam-1666",
  "/in/coworking-space/hyderabad/kothaguda":
    "/in/coworking-space/hyderabad/kothaguda",
  "/coworking-space/91springboard-vikhroli-149":
    "/coworking-space/91springboard-vikhroli-149",
  "/in/coworking-space/new-delhi/patel-nagar":
    "/in/coworking-space/delhi/patel-nagar",
  "/coworking-space/ccw-pune-coworking-space-balewadi-201":
    "/coworking-space/ccw-pune-coworking-space-balewadi-201",
  "/in/coworking-space/navi-mumbai/turbhe":
    "/in/coworking-space/navi-mumbai/turbhe",
  "/in/coworking-space/bangalore/hebbal":
    "/in/coworking-space/bangalore/hebbal",
  "/in/coworking-space/gurugram/cyber-city":
    "/in/coworking-space/gurugram/cyber-city",
  "/in/coworking-space/noida/noida-sector--15":
    "/in/coworking-space/noida/sector-15",
  "/coworking-space/mewo-panjim-1701": "/coworking-space/mewo-panjim-1701",
  "/in/coworking-space/mumbai/mahim": "/in/coworking-space/mumbai/mahim",
  "/coworking-space/315-work-avenue-gkc-domlur-696":
    "/coworking-space/315-work-avenue-gkc-domlur-696",
  "/coworking-space/serenia-sector-127-1443":
    "/coworking-space/serenia-sector-127-1443",
  "/coworking-space/anticube-mohan-estate-1382":
    "/coworking-space/anticube-mohan-estate-1382",
  "/in/coworking-space/mumbai/mahalaxmi":
    "/in/coworking-space/mumbai/mahalaxmi",
  "/coworking-space/share-space-whitefield-844":
    "/coworking-space/share-space-whitefield-844",
  "/coworking-space/control-workspace-uttam-nagar-1407":
    "/coworking-space/control-workspace-uttam-nagar-1407",
  "/coworking-space/redbrick-offices-thane-west-89":
    "/coworking-space/redbrick-offices-thane-west-89",
  "/in/coworking-space/mumbai/mulund": "/in/coworking-space/mumbai/mulund",
  "/in/coworking-space/mumbai/malad-east":
    "/in/coworking-space/mumbai/malad-east",
  "/coworking-space/mysoho-sector-26-1298":
    "/coworking-space/mysoho-sector-26-1298",
  "/coworking-space/geek-space-kukatpally-1026":
    "/coworking-space/geek-space-kukatpally-1026",
  "/coworking-space/dotspace-panampilly-nagar-1207":
    "/coworking-space/dotspace-panampilly-nagar-1207",
  "/coworking-space/devx-hitec-city-1037":
    "/coworking-space/devx-hitec-city-1037",
  "/coworking-space/sharingdesk-katargam-1252":
    "/coworking-space/sharingdesk-katargam-1252",
  "/coworking-space/awfis-ghansoli-630": "/coworking-space/awfis-ghansoli-630",
  "/in/coworking-space/bengaluru/sadashiva-nagar":
    "/in/coworking-space/bangalore/sadashiva-nagar",
  "/in/coworking-space/pune/sangamvadi": "/in/coworking-space/pune/sangamvadi",
  "/coworking-space/iworkk-sector-16-1559":
    "/coworking-space/iworkk-sector-16-1559",
  "/coworking-space/workx-coworking-space-gachibowli-224":
    "/coworking-space/workx-coworking-space-gachibowli-224",
  "/in/coworking-space/bengaluru/sector-6": "/in/coworking/bangalore",
  "/coworking-space/91springboard-sector-44-1531":
    "/coworking-space/91springboard-sector-44-1531",
  "/in/coworking-space/chennai/nandanam":
    "/in/coworking-space/chennai/nandanam",
  "/coworking-space/open-turf-navrangpura-1009":
    "/coworking-space/open-turf-navrangpura-1009",
  "/in/coworking-space/bangalore/nagarbhavi":
    "/in/coworking-space/bangalore/nagarbhavi",
  "/in/coworking-space/delhi/nehru-place":
    "/in/coworking-space/delhi/nehru-place",
  "/coworking-space/redbrick-offices-gachibowli-230":
    "/coworking-space/redbrick-offices-gachibowli-230",
  "/in/coworking-space/delhi/preet-vihar":
    "/in/coworking-space/delhi/preet-vihar",
  "/in/coworking-space/chennai/-anna-nagar":
    "/in/coworking-space/chennai/anna-nagar",
  "/coworking-space/awfis-vasant-kunj-1384":
    "/coworking-space/awfis-vasant-kunj-1384",
  "/in/coworking-space/pune/hinjawadi": "/in/coworking-space/pune/hinjawadi",
  "/coworking-space/ascend-cowork-thane-593":
    "/coworking-space/ascend-cowork-thane-593",
  "/in/coworking-space/bangalore/kr-puram":
    "/in/coworking-space/bangalore/kr-puram",
  "/in/coworking-space/pune/wakad": "/in/coworking-space/pune/wakad",
  "/in/coworking-space/bangalore/sadashiva-nagar":
    "/in/coworking-space/bangalore/sadashiva-nagar",
  "/in/coworking-space/hyderabad/begumpet":
    "/in/coworking-space/hyderabad/begumpet",
  "/coworking-space/incubex-hsr7-hsr-layout-782":
    "/coworking-space/incubex-hsr7-hsr-layout-782",
  "/coworking-space/ebc-space-2-hsr-layout-810":
    "/coworking-space/ebc-space-2-hsr-layout-810",
  "/in/coworking-space/new-delhi/east-of-kailash":
    "/in/coworking-space/delhi/east-of-kailash",
  "/coworking-space/club-360-gopalapuram-1785":
    "/coworking-space/club-360-gopalapuram-1785",
  "/coworking-space/innerspace-coworking-ernakulam-1219":
    "/coworking-space/innerspace-coworking-ernakulam-1219",
  "/coworking-space/our-offices-coworking-netaji-subhash-place-518":
    "/coworking-space/our-offices-coworking-netaji-subhash-place-518",
  "/coworking-space/workshaala-vista-hsr-layout-806":
    "/coworking-space/workshaala-vista-hsr-layout-806",
  "/coworking-space/space-55-rajajinagar-859":
    "/coworking-space/space-55-rajajinagar-859",
  "/coworking-space/bootstart-cowork-koregaon-park-320":
    "/coworking-space/bootstart-cowork-koregaon-park-320",
  "/coworking-space/richesse-cowork-erandwane-361":
    "/coworking-space/richesse-cowork-erandwane-361",
  "/coworking-space/startuphuts-hsr-layout-387":
    "/coworking-space/startuphuts-hsr-layout-387",
  "/in/coworking-space/bengaluru/malleshwaram":
    "/in/coworking-space/bangalore/malleshwaram",
  "/coworking-space/pri-coworks-jp-nagar-497":
    "/coworking-space/pri-coworks-jp-nagar-497",
  "/in/coworking-space/jaipur/shanti-nagar":
    "/in/coworking-space/jaipur/shanti-nagar",
  "/in/coworking-space/bangalore/sarjapur-road":
    "/in/coworking-space/bangalore/sarjapur-road",
  "/coworking-space/innov8-sector-18-1597":
    "/coworking-space/innov8-sector-18-1597",
  "/coworking-space/virtual-coworks-sheetal-nagar-1154":
    "/coworking-space/virtual-coworks-sheetal-nagar-1154",
  "/coworking-space/regus-vasant-kunj-1344":
    "/coworking-space/regus-vasant-kunj-1344",
  "/in/coworking-space/bangalore/balewadi": "/in/coworking/bangalore",
  "/coworking-space/executive-coworking-space-vijay-nagar-1162":
    "/coworking-space/executive-coworking-space-vijay-nagar-1162",
  "/coworking-space/workzoned-vaishali-nagar-1129":
    "/coworking-space/workzoned-vaishali-nagar-1129",
  "/in/coworking-space/kolkata/acharya-jagadish-chandra-bose-road":
    "/in/coworking-space/kolkata/acharya-jagadish-chandra-bose-road",
  "/coworking-space/the-valley-coworking-banjara-hills-249":
    "/coworking-space/the-valley-coworking-banjara-hills-249",
  "/coworking-space/workshaala-cosmic-kadubeesanahalli-919":
    "/coworking-space/workshaala-cosmic-kadubeesanahalli-919",
  "/coworking-space/indiqube-sigma-koramangala-878":
    "/coworking-space/indiqube-sigma-koramangala-878",
  "/coworking-space/urcubicle-coworking-hinjawadi-339":
    "/coworking-space/urcubicle-coworking-hinjawadi-339",
  "/in/coworking-space/hyderabad/nariman-point": "/in/coworking/hyderabad",
  "/coworking-space/cohive-coworking-bavdhan-260":
    "/coworking-space/cohive-coworking-bavdhan-260",
  "/coworking-space/the-workshop-space-baner-324":
    "/coworking-space/the-workshop-space-baner-324",
  "/coworking-space/l2l-sector-2-1422": "/coworking-space/l2l-sector-2-1422",
  "/coworking-space/step-01-workspaces-sector-32-1570":
    "/coworking-space/step-01-workspaces-sector-32-1570",
  "/coworking-space/innov8-gachibowli-216":
    "/coworking-space/innov8-gachibowli-216",
  "/coworking-space/springhouse-sector-28-1554":
    "/coworking-space/springhouse-sector-28-1554",
  "/in/coworking-space/delhi/savitri-road":
    "/in/coworking-space/delhi/savitri-road",
  "/in/coworking-space/hyderabad/kandivali-west":
    "/in/coworking-space/mumbai/kandivali-west",
  "/in/coworking-space/bangalore/sadashiv-peth": "/in/coworking/bangalore",
  "/coworking-space/awfis-outer-ring-road-900":
    "/coworking-space/awfis-outer-ring-road-900",
  "/coworking-space/greenbubbles-hsr-layout-430":
    "/coworking-space/greenbubbles-hsr-layout-430",
  "/coworking-space/krastay-cowork-saket-546":
    "/coworking-space/krastay-cowork-saket-546",
  "/coworking-space/mark-&-feeney-gopalapuram-1773":
    "/coworking-space/mark-&-feeney-gopalapuram-1773",
  "/in/coworking-space/gurugram/khar-west":
    "/in/coworking-space/mumbai/khar-west",
  "/coworking-space/start-business-center-banjara-hills-310":
    "/coworking-space/start-business-center-banjara-hills-310",
  "/coworking-space/Neopro-Coworking-Spaces-Malad-115":
    "/in/coworking-space/mumbai/malad",
  "/in/coworking-space/noida/noida-electronic-city":
    "/in/coworking-space/noida",
  "/in/coworking-space/gurugram/erandwane":
    "/in/coworking-space/pune/erandwane",
  "/in/coworking-space/new-delhi/barakhamba-road":
    "/in/coworking-space/delhi/barakhamba",
  "/coworking-space/spaces-andheri-east-45":
    "/in/coworking-space/mumbai/andheri-east",
  "/in/spaces/mumbai/andheri-east": "/in/coworking-space/mumbai/andheri-east",
  "/coworking-space/inspire-co-spaces-goregaon-east-114":
    "/in/coworking-space/mumbai/goregaon-east",
  "/in/coworking-space/new-delhi/safdarjung-development":
    "/in/coworking-space/delhi/safdarjung-development-area",
  "/coworking-space/accesswork-lower-parel-21":
    "/in/coworking-space/mumbai/lower-parel",
  "/coworking-space/toutle-space-goregaon-west-1484":
    "/in/coworking-space/mumbai/goregaon",
  "/in/coworking-space/new-delhi/ajmeri-gate":
    "/in/coworking-space/delhi/ajmeri-gate",
  "/in/coworking-space/delhi/hadapasar": "/in/coworking-space/pune/hadapsar",
  "/coworking-space/workamp-59-thane-west-90": "/in/coworking/thane",
  "/in/coworking-space/new-delhi/barakhamba-road":
    "/in/coworking-space/delhi/barakhamba",
  "/in/coworking-space/bangalore/hosur-road":
    "/in/coworking-space/bangalore/hosur-road",
  "/in/coworking-space/mumbai/financial-district":
    "/in/coworking-space/hyderabad/financial-district",
  "/coworking-space/incub8-andheri-east-87":
    "/in/coworking-space/mumbai/andheri-east",
  "/coworking-space/byob-cowork-lower-parel-584":
    "/in/coworking-space/mumbai/lower-parel",
  "/coworking-space/incuspaze-andheri-east-40":
    "/in/coworking-space/mumbai/andheri-east",
  "/coworking-space/wework-andheri-east-10":
    "/in/coworking-space/mumbai/andheri-east",
  "/in/coworking-space/delhi/district-centre": "/in/coworking/delhi",
  "/in/coworking-space/navi-mumbai/sanpada": "/in/coworking/navi-mumbai",
  "/in/coworking-space/mumbai/kukatpally":
    "/in/coworking-space/hyderabad/kukatpally",
  "/in/coworking-space/mumbai/andheri-marol": "/in/coworking-space/mumbai",
  "/in/coworking-space/bangalore/sarjapura-road":
    "/in/coworking-space/bangalore/sarjapur-road",
  "/coworking-space/spacyes-kandivali-west-108":
    "/in/coworking-space/mumbai/kandivali-west",
  "/in/coworking-space/delhi/sector-21": "/in/coworking/delhi",
  "/in/coworking-space/hyderabad/secundrabad":
    "/in/coworking-space/hyderabad/secunderabad",
  "/coworking-space/toutle-space-malad-west-1490":
    "/in/coworking-space/mumbai/malad-west",
  "/coworking-space/the-boardroom-coworking-malad-west-109":
    "/in/coworking-space/mumbai/malad-west",
  "/coworking-space/The-Boardroom-Coworking-Malad-109":
    "/in/coworking-space/mumbai/malad",
  "/in/coworking-space/mumbai/andheri-east-midc":
    "/in/coworking-space/mumbai/andheri-east",
  "/in/coworking-space/jaipur-division/malviya-nagar":
    "/in/coworking-space/jaipur/malviya-nagar",
  "/in/coworking-space/bengaluru/old-madras%20road":
    "/in/coworking-space/bangalore/old-madras-road",
  "/in/coworking-space/bengaluru/infantry-road":
    "/in/coworking-space/bangalore/infantry-road",
  "/coworking-space/awfis-sector-125-1435":
    "/coworking-space/awfis-sector-125-2228",
  "/in/coworking-space/Mumbai/dahisar-east": "/in/coworking/mumbai",
  "/in/coworking-space/wework-andheri-12":
    "/in/coworking-space/wework-andheri-east-12",
  "/in/coworking-space/Mumbai/marol": "/in/coworking-space/mumbai/andheri-east",
  "/in/coworking-space/jaipur-division/mansarovar":
    "/in/coworking-space/jaipur/mansarovar",
  "/in/coworking-space/jaipur-division/muktanand-nagar":
    "/in/coworking-space/jaipur/muktanand-nagar",
  "/in/coworking-space/jaipur-division/nirman-nagar":
    "/in/coworking-space/jaipur/nirman-nagar",
  "/in/coworking-space/jaipur-division/panchyawala":
    "/in/coworking-space/jaipur/panchyawala",
  "/in/coworking-space/jaipur-division/rajiv-vihar-colony":
    "/in/coworking-space/jaipur/rajiv-vihar-colony",
  "/in/coworking-space/jaipur-division/ramnagar":
    "/in/coworking-space/jaipur/ramnagar",
  "/in/coworking-space/jaipur-division/shanti-nagar":
    "/in/coworking-space/jaipur/shanti-nagar",
  "/in/coworking-space/jaipur-division/shyam-nagar":
    "/in/coworking-space/jaipur/shyam-nagar",
  "/in/coworking-space/jaipur-division/tonk-road":
    "/in/coworking-space/jaipur/tonk-road",
  "/in/coworking-space/jaipur-division/vaishali-nagar":
    "/in/coworking-space/jaipur/vaishali-nagar",
  "/in/coworking-space/new-delhi/shahpur": "/in/coworking-space/delhi/shahpur",
  "/in/coworking-space/new-delhi/shahpur-jat":
    "/in/coworking-space/delhi/shahpur-jat",
  "/in/coworking-space/new-delhi/shalimar-bagh":
    "/in/coworking-space/delhi/shalimar-bagh",
  "/in/coworking-space/new-delhi/delhi-division":
    "/in/coworking-space/delhi/south-delhi",
  "/in/coworking-space/new-delhi/tilak-marg":
    "/in/coworking-space/delhi/tilak-marg",
  "/in/coworking-space/new-delhi/turkman-gate":
    "/in/coworking-space/delhi/turkman-gate",
  "/in/coworking-space/new-delhi/wazirpur":
    "/in/coworking-space/delhi/wazirpur",
  "/in/coworking-space/central-delhi/turkman-gate":
    "/in/coworking-space/delhi/turkman-gate",
  "/in/coworking-space/south-delhi/east-of-kailash":
    "/in/coworking-space/delhi/east-of-kailash",
  "/in/coworking-space/east-delhi/anand-vihar":
    "/in/coworking-space/delhi/anand-vihar",
  "/in/coworking-space/south-delhi/mohan-cooperative-industrial-estate":
    "/in/coworking-space/delhi/mohan-cooperative-industrial-estate",
  "/in/coworking-space/central-delhi/jhandewalan":
    "/in/coworking-space/delhi/jhandewalan",
  "/in/coworking-space/south-delhi/nehru-place":
    "/in/coworking-space/delhi/nehru-place",
  "/in/coworking-space/new-delhi/tilak-marg":
    "/in/coworking-space/delhi/tilak-marg",
  "/in/coworking-space/south-delhi/badarpur":
    "/in/coworking-space/delhi/badarpur",
  "/in/coworking-space/south-west-delhi/madhu-vihar":
    "/in/coworking-space/delhi/madhu-vihar",
  "/in/coworking-space/south-west-delhi/green-park":
    "/in/coworking-space/delhi/green-park",
  "/in/coworking-space/south-delhi/hauz-khas":
    "/in/coworking-space/delhi/hauz-khas",
  "/in/coworking-space/south-delhi/saidulajab":
    "/in/coworking-space/delhi/saidulajab",
  "/in/coworking-space/south-delhi/kalkaji":
    "/in/coworking-space/delhi/kalkaji",
  "/in/coworking-space/west-delhi/janakpuri":
    "/in/coworking-space/delhi/janakpuri",
  "/in/coworking-space/east-delhi/preet-vihar":
    "/in/coworking-space/delhi/preet-vihar",
  "/in/coworking-space/north-west-delhi/netaji-subhash-place":
    "/in/coworking-space/delhi/netaji-subhash-place",
  "/in/coworking-space/north-west-delhi/pitam-pura":
    "/in/coworking-space/delhi/pitam-pura",
  "/in/coworking-space/south-west-delhi/dwarka":
    "/in/coworking-space/delhi/dwarka",
  "/in/coworking-space/south-delhi/okhla": "/in/coworking-space/delhi/okhla",
  "/in/coworking-space/north-west-delhi/rohini":
    "/in/coworking-space/delhi/rohini",
  "/in/coworking-space/south-west-delhi/safdarjung-enclave":
    "/in/coworking-space/delhi/safdarjung-enclave",
  "/in/coworking-space/north-west-delhi/shalimar-bagh":
    "/in/coworking-space/delhi/shalimar-bagh",
  "/in/coworking-space/south-delhi/shahpur-jat":
    "/in/coworking-space/delhi/shahpur-jat",
  "/in/coworking-space/south-delhi/safdarjung-development-area":
    "/in/coworking-space/delhi/safdarjung-development-area",
  "/in/coworking-space/east-delhi/mayur-vihar":
    "/in/coworking-space/delhi/mayur-vihar",
  "/in/coworking-space/south-delhi/defence-colony":
    "/in/coworking-space/delhi/defence-colony",
  "/in/coworking-space/west-delhi/paschim-vihar":
    "/in/coworking-space/delhi/paschim-vihar",
  "/in/coworking-space/north-west-delhi/wazirpur":
    "/in/coworking-space/delhi/wazirpur",
  "/in/coworking-space/south-west-delhi/bhikaji-cama-place":
    "/in/coworking-space/delhi/bhikaji-cama-place",
  "/coworking-space/sp-coworking-kalkaji-448":
    "/coworking-space/empowerers-coworking-city-hauz-khas-village-448",
  "/coworking-space/the-executive-centre-hebbal-951":
    "/coworking-space/beginest-harbor-5-residency-road-951",
  "/coworking-space/flexi-business-hub-navrangpura-1008":
    "/coworking-space/sspacia-navrangpura-1008",
  "/coworking-space/co-desq-sector-62-1450":
    "/coworking-space/awfis-sector-62-1450",
  "/coworking-space/nexus-spaces-vijay-nagar-1184":
    "/coworking-space/smartworks-new-palasia-1184",
  "/coworking-space/nukleus-coworking-dlf-phase-5-2045":
    "/coworking-space/insspire-coworking-balewadi-2045",
  "/coworking-space/vatika-business-centre-teynampet-1751":
    "/coworking-space/regus-mylapore-1751",
  "/coworking-space/bhive-whitefield-1825":
    "/coworking-space/bhive-premium-whitefield-1825",
  "/coworking-space/ecosphere-sector-67-1432":
    "/coworking-space/coworkzen-sector-62-1432",
  "/coworking-space/awfis-ameerpet-1845":
    "/coworking-space/smartworks-andheri-east-1845",
  "/coworking-space/dailydeskk-baner-1616":
    "/coworking-space/awfis-sector-53-1616",
  "/in/coworking-space/delhi-division/shahpur":
    "/in/coworking-space/delhi/shahpur",
  "/in/coworking-space/delhi-division/shahpur-jat":
    "/in/coworking-space/delhi/shahpur-jat",
  "/in/coworking-space/delhi-division/shalimar-bagh":
    "/in/coworking-space/delhi/shalimar-bagh",
  "/in/coworking-space/delhi-division/tilak-marg":
    "/in/coworking-space/delhi/tilak-marg",
  "/in/coworking-space/delhi-division/turkman-gate":
    "/in/coworking-space/delhi/turkman-gate",
  "/in/coworking-space/delhi-division/wazirpur":
    "/in/coworking-space/delhi/wazirpur",
  "/in/coworking-space/delhi-division/east-of-kailash":
    "/in/coworking-space/delhi/east-of-kailash",
  "/in/coworking-space/delhi-division/anand-vihar":
    "/in/coworking-space/delhi/anand-vihar",
  "/in/coworking-space/delhi-division/mohan-cooperative-industrial-estate":
    "/in/coworking-space/delhi/mohan-cooperative-industrial-estate",
  "/in/coworking-space/delhi-division/jhandewalan":
    "/in/coworking-space/delhi/jhandewalan",
  "/in/coworking-space/delhi-division/nehru-place":
    "/in/coworking-space/delhi/nehru-place",
  "/in/coworking-space/delhi-division/badarpur":
    "/in/coworking-space/delhi/badarpur",
  "/in/coworking-space/delhi-division/madhu-vihar":
    "/in/coworking-space/delhi/madhu-vihar",
  "/in/coworking-space/delhi-division/green-park":
    "/in/coworking-space/delhi/green-park",
  "/in/coworking-space/delhi-division/hauz-khas":
    "/in/coworking-space/delhi/hauz-khas",
  "/in/coworking-space/delhi-division/saidulajab":
    "/in/coworking-space/delhi/saidulajab",
  "/in/coworking-space/delhi-division/kalkaji":
    "/in/coworking-space/delhi/kalkaji",
  "/in/coworking-space/delhi-division/janakpuri":
    "/in/coworking-space/delhi/janakpuri",
  "/in/coworking-space/delhi-division/preet-vihar":
    "/in/coworking-space/delhi/preet-vihar",
  "/in/coworking-space/north-delhi-division/netaji-subhash-place":
    "/in/coworking-space/delhi/netaji-subhash-place",
  "/in/coworking-space/north-delhi-division/pitam-pura":
    "/in/coworking-space/delhi/pitam-pura",
  "/in/coworking-space/delhi-division/dwarka":
    "/in/coworking-space/delhi/dwarka",
  "/in/coworking-space/delhi-division/okhla": "/in/coworking-space/delhi/okhla",
  "/in/coworking-space/north-delhi-division/rohini":
    "/in/coworking-space/delhi/rohini",
  "/in/coworking-space/delhi-division/safdarjung-enclave":
    "/in/coworking-space/delhi/safdarjung-enclave",
  "/in/coworking-space/north-delhi-division/shalimar-bagh":
    "/in/coworking-space/delhi/shalimar-bagh",
  "/in/coworking-space/delhi-division/safdarjung-development-area":
    "/in/coworking-space/delhi/safdarjung-development-area",
  "/in/coworking-space/delhi-division/mayur-vihar":
    "/in/coworking-space/delhi/mayur-vihar",
  "/in/coworking-space/delhi-division/defence-colony":
    "/in/coworking-space/delhi/defence-colony",
  "/in/coworking-space/delhi-division/paschim-vihar":
    "/in/coworking-space/delhi/paschim-vihar",
  "/in/coworking-space/north-delhi-division/wazirpur":
    "/in/coworking-space/delhi/wazirpur",
  "/in/coworking-space/delhi-division/bhikaji-cama-place":
    "/in/coworking-space/delhi/bhikaji-cama-place",
  "/in/coworking/new-delhi": "/in/coworking/delhi",
};

export function middleware(request) {
  const token = request.cookies.get(TOKEN_NAME)?.value;
  const pathname = request.nextUrl.pathname;
  if (pathname === "/profile-management" && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (pathname === "/booking-management" && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (pathname === "/booking-request-inquires" && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (pathname === "/visit-scheduling" && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (pathname === "/favourite-workspace" && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (pathname === "/workspace-review-rating-list" && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (urlRedirects[pathname] && urlRedirects[pathname] !== pathname) {
    return NextResponse.redirect(new URL(urlRedirects[pathname], request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/:path*"],
};
