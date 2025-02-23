from collections import deque
import string
from node import Node
from dictionary import Dictionary

class Search:
    """
        Implements search algorithms for word transformations.
    """
    def __init__(self, start_word="", end_word=""):
        """
        Initializes the Search object with start and end words.

        Args:
            start_word (str): The word to start the transformation from.
            end_word (str): The target word to transform into.
        """    
        self.start_word = start_word
        self.end_word = end_word

    def bfs(self):
        """
        Performs Breadth-First Search (BFS).

        Returns:
            tuple: (Node or None, int, int) The final Node representing the end_word if a path is found, 
                otherwise None, number of nodes expanded, and solution length.
        """
        queue = deque([Node(self.start_word)]) # queue to traverse the combinations
        visited = set([self.start_word]) # set to store the visited words
        dictionary = Dictionary("words.txt")
        expandedNodeCount = 0

        # pop and add the current word until queue is empty
        while queue:
            current_node = queue.popleft()
            current_word = current_node.value
            expandedNodeCount += 1

            if current_word == self.end_word: # check if word reaches the goal
                print("Number of expanded nodes",expandedNodeCount,"Solution length",current_node.get_depth())
                return current_node

            for i in range(len(current_word)): # iterate through each character of current word
                for c in string.ascii_lowercase: # iterate each character of the alphabet
                    next_word = current_word[:i] + c + current_word[i+1:] # checks the next word
                    if next_word not in visited and Dictionary.search_word(dictionary, next_word): # checks next word that isn't visited and in dictionary
                        next_node = Node(next_word)
                        next_node.set_parent(current_node)
                        queue.append(next_node)
                        visited.add(next_word)
        return None

    def dfs(self):
        """
        Performs Depth-First Search (DFS).

        Returns:
            tuple: (Node or None, int, int) The final Node representing the end_word if a path is found, 
                otherwise None, number of nodes expanded, and solution length.
        """        
        stack = [Node(self.start_word)] # stack used to manage the words we need to explore
        visited = set() # set to store the visited words
        dictionary = Dictionary("words.txt")
        expandedNodeCount = 0

        # pop and add the current word until stack is empty
        while stack:
            current_node = stack.pop()
            current_word = current_node.value
            expandedNodeCount += 1

            # checks if the word was visited and if not then add it to set
            if current_word not in visited:
                visited.add(current_word)

            if current_word == self.end_word: # check if word reached the goal
                print("Number of nodes expanded:",expandedNodeCount,"Solution length",current_node.get_depth())
                return current_node

            for i in range(len(current_word)): # iterate through each character of current word
                for c in string.ascii_lowercase: # iterate each character of the alphabet
                    next_word = current_word[:i] + c + current_word[i+1:] # checks the next word
                    if next_word not in visited and dictionary.search_word(next_word): # checks next word that isn't visited and in dictionary
                        next_node = Node(next_word)
                        next_node.set_parent(current_node)
                        stack.append(next_node)
        return None

    def print_transformations(self, word_list):
        """
        Helper method to print the sequence of words
        Args:
            world_list(list) Sequence of words 
        """
        print(" --> ".join(word_list))