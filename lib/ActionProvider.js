class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleCategorySelection = () => {
      const message = this.createChatBotMessage(
        "Hva vil du gjøre?",
        { widget: "CategorySelection" }
      );
      this.updateChatbotState(message);
    };
  
    handleFylkestingets3Samling2024 = () => {
      const message = this.createChatBotMessage(
        "Here is information about Fylkestingets 3. samling 2024",
        { widget: "Fylkestingets3Samling2024" }
      );
      this.updateChatbotState(message);
    };
  
    handleEksamenForElever = () => {
      const message = this.createChatBotMessage(
        "Here is information about Eksamen for elever",
        { widget: "EksamenForElever" }
      );
      this.updateChatbotState(message);
    };
  
    handleEksamenForPrivatister = () => {
      const message = this.createChatBotMessage(
        "Here is information about Eksamen for privatister",
        { widget: "EksamenForPrivatister" }
      );
      this.updateChatbotState(message);
    };
  
    handleSkoler = () => {
      const message = this.createChatBotMessage(
        "Here is information about Skoler",
        { widget: "Skoler" }
      );
      this.updateChatbotState(message);
    };
  
    handleReise = () => {
      const message = this.createChatBotMessage(
        "Here is information about Reise med buss, hurtigbåt og ferge",
        { widget: "Reise" }
      );
      this.updateChatbotState(message);
    };
  
    handleSkoleferie = () => {
      const message = this.createChatBotMessage(
        "Here is information about Skoleferie og fridager",
        { widget: "Skoleferie" }
      );
      this.updateChatbotState(message);
    };
  
    updateChatbotState(message) {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;
  