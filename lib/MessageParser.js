class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("samling")) {
        this.actionProvider.handleFylkestingets3Samling2024();
      } else if (lowerCaseMessage.includes("elever")) {
        this.actionProvider.handleEksamenForElever();
      } else if (lowerCaseMessage.includes("privatister")) {
        this.actionProvider.handleEksamenForPrivatister();
      } else if (lowerCaseMessage.includes("skoler")) {
        this.actionProvider.handleSkoler();
      } else if (lowerCaseMessage.includes("reise")) {
        this.actionProvider.handleReise();
      } else if (lowerCaseMessage.includes("skoleferie")) {
        this.actionProvider.handleSkoleferie();
      } else {
        this.actionProvider.handleCategorySelection();
      }
    }
  }
  
  export default MessageParser;
  