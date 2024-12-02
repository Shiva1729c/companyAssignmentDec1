import AppSideBar from '../AppSideBar'
import UserDashboardHeader from '../UserDashboardHeader'
import PersonDetailTabs from '../PersonDetailTabs'
import PersonDetails from '../PersonDetails'
import InteractionTabs from '../InteractionTabs'
import MessageAndAttachmentTabs from '../MessageAndAttachmentTabs'
import AskCatura from '../AskCatura'
import ActionLauncher from '../ActionLauncher'
import './index.css'

const Home = () => (
  <div className="App-main-content">
    <AppSideBar />
    <div>
      <UserDashboardHeader />
      <PersonDetailTabs />
      <div className="person-Interaction-tabs">
        <PersonDetails />
        <div>
          <InteractionTabs />
          <MessageAndAttachmentTabs />
        </div>
        <div className="askCatura-action">
          <AskCatura />
          <ActionLauncher />
        </div>
      </div>
    </div>
  </div>
)

export default Home
