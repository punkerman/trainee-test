public interface Stack<T> {

    /**
     * Push an item on the top of the Stack.
     * @param item An item to put on the stack.
     * @return Itself so that you can chain pushes.
     */
    Stack<T> push(T item);

    /**
     * Pops the topmost item of the stack.
     * @return The topmost item.
     */
    T pop();

    /**
     * Checks if the item is on the stack.
     * @param item The item to search for.
     * @return True if the item is found on the stack.
     */
    boolean contains(T item);

    /**
     * Get the item of the stack. Will pop until it finds it of throw an IllegalArgumentException if not found.
     * @param item item to get of the stack.
     * @return Object item of the stack.
     * @throws IllegalArgumentException if item is not found
     */
    T access(T item) throws IllegalArgumentException;

    /**
     * Checks if the Stack is empty.
     * @return True if it is empty.
     */
    boolean isEmpty();
}
