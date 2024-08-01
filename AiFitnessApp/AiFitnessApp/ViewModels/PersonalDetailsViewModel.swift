// PersonalDetailsViewModel.swift
import Foundation

class PersonalDetailsViewModel: ObservableObject {
    @Published var user = User(weight: 70.0, height: 170.0, age: 25, goal: "")
    
    func updateUserDetails(weight: Double, height: Double, age: Int) {
        user.weight = weight
        user.height = height
        user.age = age
    }
}

