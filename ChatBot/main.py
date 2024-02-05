import os
import config
from openai import OpenAI

client = OpenAI(
    api_key=config.OPENAI_API_KEY
    )

chat_history = []

while True: 
    prompt = input("Hola, ¿Qué necesitas? \n")
    
    if prompt == "exit":
        break
        
    else:
        
        chat_history.append({"role" : "user",  "message" : prompt})
        
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages= chat_history,
            max_tokens= 4000,
            stream=True
        )

        collected_messages = []

        for chunk in response:
            chunk_message = chunk['choices'][0]['delta']
            collected_messages.append(chunk_message)
            fully_reply_content = ''.join([m.get('content', '') for m in collected_messages]) #Extraigo cada uno de los mensajes de los chunks y los uno para que sean una sola "frase"
            print(fully_reply_content)
            print("\033[H\033[J", end="") #Limpio los chunks anteriores de la pantalla para que solo se muestre el ultimo con la frase completa
            
        chat_history.append({"role": "assistant", "content" : fully_reply_content})
        print(fully_reply_content)



