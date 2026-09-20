import numpy as np
import matplotlib.pyplot as plt
m=1
x_data=np.linspace(1,10,11)
y_data=m*x_data
plt.title("Graph of exuation y= x'")
plt.scatter(x_data,y_data)
plt.xlabel("x")
plt.ylabel('y')
plt.show()