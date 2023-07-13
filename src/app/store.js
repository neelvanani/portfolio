import {create} from 'zustand';
import {devtools,persist} from 'zustand/middleware';

const bankStore=(set)=>({
    account:0,
    deposit:(amount)=>{
        set((state)=>({
            account:state.account+amount,
        }))
    },
    withdraw:(amount)=>{
        set((state)=>({
            account:state.account-amount,
        }))
    }
})

const useBankStore = create(
    devtools(
        persist(bankStore,{
            Balance:"balance"
        })
    )
)

export default useBankStore;