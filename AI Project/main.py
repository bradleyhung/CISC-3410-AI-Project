from dictionary import Dictionary
from search import Search

def main():
    print("**************Dictionary usage example**************")
    file_name = "words.txt"
    dict_obj = Dictionary(file_name)
    
    if dict_obj.search_word("test"):
        print("The tested word is in our dictionary")

    print("**************Example to test search implementation **************")
    start_word = "glass"
    end_word = "clank"
    new_search = Search(start_word, end_word)

    goal_node_BFS = new_search.bfs()
    
    if goal_node_BFS is not None:
        while goal_node_BFS.get_parent() is not None:
            print(f"{goal_node_BFS.value} <-", end="")
            goal_node_BFS = goal_node_BFS.get_parent()
        print(goal_node_BFS.value)
    else:
        print("You are yet to implement the code, try after implementation")

    goal_node_DFS = new_search.dfs()

    if goal_node_DFS is not None:
        while goal_node_DFS.get_parent() is not None:
            print(f"{goal_node_DFS.value} <-", end="")
            goal_node_DFS = goal_node_DFS.get_parent()
        print(goal_node_DFS.value)
    else:
        print("You are yet to implement the code, try after implementation")

if __name__ == "__main__":
    main()
