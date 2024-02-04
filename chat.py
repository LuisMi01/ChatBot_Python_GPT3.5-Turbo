import openai

response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages= [
        {"role": "system", "content": "Eres un asistente util."},
        {"role": "user", "content": "¿Que puedo hacer por ti?"}
    ],
    max_tokens=150
)

print(response)