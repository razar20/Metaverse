import abi from "./abi/abi.json" assert { type: "json"};

const connect = new Promise((res, rej) => {
    if(typeof window.ethereum == "undefined") {
        rej("Install Metamask");
    }
    window.etherum.request({ method: "eth_requestAccounts" });
    
    let web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(
        abi, 
        "0x20e9F132388197EB9d9FbD42d93B78BA5Ca0e358"
        );

        web3.eth.getAccounts().then((accounts) => {
            console.log(accounts);
        });


});

export default connect;