import { createChatBotMessage } from 'react-chatbot-kit';
import CategorySelection from '../components/CategorySelection';
import Fylkestingets3Samling2024 from '../components/Fylkestingets3Samling2024';
import EksamenForElever from '../components/EksamenForElever';
import EksamenForPrivatister from '../components/EksamenForPrivatister';
import Skoler from '../components/Skoler';
import Reise from '../components/Reise';
import Skoleferie from '../components/Skoleferie';

const config = {
  initialMessages: [
    createChatBotMessage(`Hei! Velkommen til NFKs virtuelle assistent. Hvordan kan jeg hjelpe deg i dag?`, {
      widget: 'CategorySelection',
    }),
  ],
  widgets: [
    {
      widgetName: 'CategorySelection',
      widgetFunc: (props) => <CategorySelection {...props} />,
    },
    {
      widgetName: 'Fylkestingets3Samling2024',
      widgetFunc: (props) => <Fylkestingets3Samling2024 {...props} />,
    },
    {
      widgetName: 'EksamenForElever',
      widgetFunc: (props) => <EksamenForElever {...props} />,
    },
    {
      widgetName: 'EksamenForPrivatister',
      widgetFunc: (props) => <EksamenForPrivatister {...props} />,
    },
    {
      widgetName: 'Skoler',
      widgetFunc: (props) => <Skoler {...props} />,
    },
    {
      widgetName: 'Reise',
      widgetFunc: (props) => <Reise {...props} />,
    },
    {
      widgetName: 'Skoleferie',
      widgetFunc: (props) => <Skoleferie {...props} />,
    },
  ],
};

export default config;
