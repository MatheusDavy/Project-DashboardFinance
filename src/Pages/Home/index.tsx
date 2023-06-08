// Data
import { useContext } from 'react'
// Icons
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from 'react-icons/bs'
import { FaMoneyBill } from 'react-icons/fa'
// Components
import { CardsRevenues, HomeContainer, HomeGridOne, HomeGridThree, HomeGridTwo, TransactionContent } from './styles'
import { converteCurrencyToCurremtLanguage } from '../../Context/Utils/ConverteCurrency'
import { useTranslation } from 'react-i18next'
import { TransactionContext } from '../../Context/Transaction/context'
import { useGoalsContext } from '../../Context/Goals'
import { TransactionsTable } from '../../Components/TransactionsCard'
import { GoalsCard } from '../../Components/GoalsCard'




export function Home() {
    const { transactions_API } = useContext(TransactionContext)
    const { openCloseModal, goals_API } = useGoalsContext()

    const { i18n, t } = useTranslation()
    const currentLanguage = i18n.language
    const newIncome = converteCurrencyToCurremtLanguage(transactions_API.income, currentLanguage, true)
    const newExpense = converteCurrencyToCurremtLanguage(transactions_API.expense, currentLanguage, true)
    const newTotal = (converteCurrencyToCurremtLanguage(transactions_API.totalAmount, currentLanguage, true))

    return (
        <HomeContainer>
            <HomeGridOne>

                <CardsRevenues variant='In'>
                    <div className='content--text'>
                        <h3 className='title'>{t('January')}</h3>
                        <h2 className='amount'>{newIncome}</h2>
                    </div>

                    <div className='content--icon'>
                        <BsFillArrowUpCircleFill size={23} />
                    </div>
                </CardsRevenues>

                <CardsRevenues variant='Out'>
                    <div className='content--text'>
                        <h3 className='title'>{t('January')}</h3>
                        <h2 className='amount'>{newExpense}</h2>
                    </div>

                    <div className='content--icon'>
                        <BsFillArrowDownCircleFill size={23} />
                    </div>
                </CardsRevenues>

                <CardsRevenues variant='Summary'>
                    <div className='content--text'>
                        <h3 className='title'>{t('January')}</h3>
                        <h2 className='amount'>{newTotal}</h2>
                    </div>

                    <div className='content--icon'>
                        <FaMoneyBill size={23} />
                    </div>
                </CardsRevenues>

            </HomeGridOne>

            <HomeGridTwo>
                <h2 className='title'>{t('Transactions')}</h2>
                <div className='content'>
                    {transactions_API.transactionAPI?.map(transaction => (
                        <div key={transaction.id}>
                            <TransactionsTable
                                key={transaction.id}
                                id={transaction.id}
                                type={transaction.type}
                                amount={transaction.amount}
                                description={transaction.description}
                                date={transaction.date}
                                isAbleToEdit={false}
                            />
                        </div>
                    ))}
                </div>
            </HomeGridTwo>

            <HomeGridThree>
                <h3 className='title'>{t('Goals')}</h3>
                <div className='content'>
                    {goals_API.map(goal => (
                        <div key={goal.id}>
                            <GoalsCard
                                id={goal.id}
                                bgColor={goal.bgColor}
                                percent={goal.percent}
                                date={goal.date}
                                amountFinal={goal.amountInitial}
                                amountInitial={goal.amountFinal}
                                icon={goal.icon}
                                name={goal.name}
                                isAbleToEdit={false}
                            />
                        </div>
                    ))}
                </div>
            </HomeGridThree>

        </HomeContainer>
    )
}