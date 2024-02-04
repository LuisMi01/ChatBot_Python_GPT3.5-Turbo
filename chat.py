import openai

openai.api_key= "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"

response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages= [
        {"role": "system", "content": "Eres un asistente util."},
        {"role": "user", "content": "¿Que puedo hacer por ti?"}
    ],
    max_tokens= 350
    stram=True
)

collected_messages = []


for chunk in response:
    chunk_message = chunk['choices'][0]['delta']
    collected_messages.append(chunk_message)
    print(collected_messages)