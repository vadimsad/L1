function convertToJSON(str) {
    let index = 0;
  
    function parseValue() {
      const char = str[index];
      
      if (char === '"') {
        return parseString();
      } else if (char === '{') {
        return parseObject();
      } else if (char === '[') {
        return parseArray();
      } else if (char === 't') {
        return parseTrue();
      } else if (char === 'f') {
        return parseFalse();
      } else if (char === 'n') {
        return parseNull();
      } else {
        return parseNumber();
      }
    }
  
    function parseString() {
      index++;
      let result = '';
      
      while (str[index] !== '"') {
        result += str[index];
        index++;
      }
      
      index++;
      return result;
    }
  
    function parseObject() {
      index++;
      const obj = {};
  
      while (str[index] !== '}') {
        const key = parseString();
        index++; // Skip ":"
        const value = parseValue();
        obj[key] = value;
  
        if (str[index] === ',') {
          index++; // Skip ","
        }
      }
  
      index++; // Skip "}"
      return obj;
    }
  
    function parseArray() {
      index++;
      const arr = [];
  
      while (str[index] !== ']') {
        const value = parseValue();
        arr.push(value);
  
        if (str[index] === ',') {
          index++; // Skip ","
        }
      }
  
      index++; // Skip "]"
      return arr;
    }
  
    function parseTrue() {
      index += 4; // Skip "true"
      return true;
    }
  
    function parseFalse() {
      index += 5; // Skip "false"
      return false;
    }
  
    function parseNull() {
      index += 4; // Skip "null"
      return null;
    }
  
    function parseNumber() {
      let result = '';
      
      while (/[0-9.eE+-]/.test(str[index])) {
        result += str[index];
        index++;
      }
  
      return parseFloat(result);
    }
  
    return parseValue();
  }
  
  const jsonString = '{"name": "John", "age": 30, "isAdmin": false, "friends": ["Alice", "Bob"], "address": {"city": "New York", "zip": "10001"}}';
  const jsonObject = convertToJSON(jsonString);
  console.log(jsonObject);
  