export default function guardrail(mathFunction) {
    const queue = ['Guardrail was processed'];
    try {
      const response = mathFunction();
      queue.unshift(response);
    } catch (error) {
      queue.unshift(`Error: ${error.message}`);
    }
    return queue;
  }