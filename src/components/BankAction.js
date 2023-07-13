import useBankStore from "../app/store";

const BankAction = ()=>{
    const {account,deposit,withdraw} = useBankStore(
        (state)=>({
            account:state.account,
            deposit: state.deposit,
            withdraw:state.withdraw
        })
    )
    

    const handleDeposit = (amount)=>{
        deposit(amount)
        console.log(account);
    }
    const handleWithdraw = (amount)=>{
        if(account<=0){
            console.log("if")
            alert("Low Balance Account");
        }else{
            withdraw(amount)
            console.log(account);
        }
    }
   
    return(
        <>
        <div>
            <p style={{fontSize : 30}}>Bank Account Balance:{account}</p>
            <button onClick={()=>handleDeposit(1000)}>Deposit</button>
            <button onClick={()=>handleWithdraw(1000)}>withdraw</button>
        </div>
        </>
    )
}

export default BankAction;