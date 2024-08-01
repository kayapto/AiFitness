// ChatView.swift
import SwiftUI

struct ChatView: View {
    @State private var messages: [String] = []
    @State private var inputText: String = ""
    
    var body: some View {
        VStack {
            List(messages, id: \.self) { message in
                Text(message)
            }
            HStack {
                TextField("Ask me anything...", text: $inputText)
                Button("Send") {
                    // Call ChatGPT API
                    messages.append(inputText)
                    inputText = ""
                }
            }
            .padding()
        }
        .navigationTitle("Chat with AI")
    }
}
