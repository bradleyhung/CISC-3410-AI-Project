class Node:
    """
    Represents a node in the word transformation search.
    """
    def __init__(self, value=""):
        """
        Initializes a Node with a given word value.

        Args:
            value (str): The word stored in this node.
        """
        self.value = value
        self.previous_node = None

    def set_parent(self, parent_node):
        """
        Sets the parent node, linking this node to a previous step in the search path.

        Args:
            parent_node (Node): The previous node in the search path.
        """
        self.previous_node = parent_node

    def get_parent(self):
        """
        Retrieves the parent node of this node.

        Returns:
            Node or None: The previous node in the path, or None if it's the root node.
        """
        return self.previous_node

    def get_depth(self):
        """
        Calculates the depth of the node in the search path.

        Returns:
            int: The depth of the node.
        """
        depth = 0
        current_node = self
        while current_node.get_parent() is not None:
            depth += 1
            current_node = current_node.get_parent()
        return depth