// Components
import {  WalletContainer, ContainerContent } from "./styles";
import { CreditCards } from "./Components/CreditCard";
import { ModalAddCreditCard } from "../../Components/Modal/CreditCard";
import { Transactions } from "./Components/Transactions";

export function WalletPage() {
    return (
        <WalletContainer>
            {/* CREDIT CARD */}
            <ModalAddCreditCard />
            <CreditCards />
            
            <ContainerContent>
            {/* TRANSACTIONS */}
                <Transactions/>

            </ContainerContent>


        </WalletContainer>
    )
}