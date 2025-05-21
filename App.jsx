ws.current.onmessage = (event) => {
  try {
    if (event.data instanceof Blob) {
      const reader = new FileReader();
      reader.onload = () => {
        const parsed = JSON.parse(reader.result);
        setMessages(prev => [...prev, parsed]);
      };
      reader.readAsText(event.data);
    } else {
      const parsed = JSON.parse(event.data);
      setMessages(prev => [...prev, parsed]);
    }
  } catch (error) {
    console.error('Error parsing message:', error);
  }
};
