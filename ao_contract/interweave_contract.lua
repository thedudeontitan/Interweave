local ao = require('ao')
local json = require('json')

-- Initialize with default values
local ApiDetails = {}

-- Define the structure for ApiItem
local function createApiItem(key, type, name, description, provider, icon)
    return {
        key = key,
        type = type,
        name = name,
        description = description,
        provider = provider,
        icon = icon
    }
end

Handlers.add('add_api_details', Handlers.utils.hasMatchingTag('Action', 'AddApiDetails'), function(msg)
    -- Extract details from the message
    local key = msg.Key
    local type = msg.Type
    local name = msg.Name
    local description = msg.Description
    local provider = msg.Provider
    local icon = msg.Icon

    -- Create a new ApiItem and store it in ApiDetails
    local newApiItem = createApiItem(key, type, name, description, provider, icon)
    table.insert(ApiDetails, newApiItem)

    -- Send a response with the stored data and a success message
    local response = {
        message = "API added successfully",
        data = newApiItem
    }

    ao.send({ Target = msg.From, Data = json.encode(response) })
end)

-- Example utility to display all stored API details (for testing/debugging purposes)
Handlers.add('get_api_details', Handlers.utils.hasMatchingTag('Action', 'GetApiDetails'), function(msg)
    local response = {
        message = "Current API details",
        data = ApiDetails
    }

    ao.send({ Target = msg.From, Data = json.encode(response) })
end)
