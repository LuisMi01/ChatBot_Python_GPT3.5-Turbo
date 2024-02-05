import os
import config
from openai import OpenAI

client = OpenAI(
    api_key=config.OPENAI_API_KEY
    )

chat_history = []

while True: 
    prompt = input("\nHola, ¿Qué necesitas? \n")
    
    if prompt == "exit":
        break
        
    else:
        
        chat_history.append({"role" : "user",  "content" : prompt})
        
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages= chat_history,
            max_tokens= 100,
            stream=True
        )

        collected_messages = []

        for chunk in response:
            if chunk.choices[0].delta.content is not None:
                 print(chunk.choices[0].delta.content, end="")



