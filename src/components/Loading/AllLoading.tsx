import { fetchSourceCode } from "@/utils/getSourceCode";
import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

function AllLoading() {
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [components, setComponents] = useState<(React.ComponentType | null)[]>(
    Array(30).fill(null)
  );

  const fetchAndCopyCode = async (componentPath: string, index: number) => {
    setLoadingIndex(index);
    setCopiedIndex(null);

    try {
      const code = await fetchSourceCode(componentPath);
      await navigator.clipboard.writeText(code);
      setLoadingIndex(null);
      setCopiedIndex(index);

      setTimeout(() => {
        setCopiedIndex(null);
      }, 3000);
    } catch (error) {
      console.error("Failed to fetch and copy code:", error);
      setLoadingIndex(null);
    }
  };

  useEffect(() => {
    const loadComponents = async () => {
      const loadedComponents = await Promise.all(
        components.map(async (_, i) => {
          try {
            const { default: Component } = await import(`./Loading${i + 1}`);
            return Component;
          } catch (error) {
            console.error(`Failed to load component Loading${i + 1}:`, error);
            return null;
          }
        })
      );
      setComponents(loadedComponents);
    };

    loadComponents();
  }, []);

  return (
    <div className="grid grid-cols-6 p-10 gap-10">
      {components.map((Component, i) => (
        <div
          key={i}
          className="flex justify-center items-center p-5"
        >
          <div className="flex flex-col items-center gap-y-6 h-max">
            {Component ? <Component /> : <div>Loading failed</div>}
            <div className="bg-gray-200 pr-3 py-1 font-medium flex items-center dark:bg-customDark rounded-lg">
              <button
                className="text-black dark:text-white flex items-center justify-center px-4 py-1"
                onClick={() => fetchAndCopyCode(`Loading/Loading${i + 1}.tsx`, i)}
                disabled={loadingIndex === i}
              >
                {copiedIndex === i ? (
                  <>
                    <FaCheck className="text-green-500 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <FiCopy className="mr-2" />
                    Code
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllLoading;
