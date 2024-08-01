// GoalSelectionViewModel.swift
import Foundation

class GoalSelectionViewModel: ObservableObject {
    @Published var goal: String = "Weight Loss"
    
    func updateGoal(newGoal: String) {
        goal = newGoal
    }
}

